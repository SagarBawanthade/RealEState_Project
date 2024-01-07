import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const test = (req, res) => {
    res.json({
        message: "Hello World",
    })
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id)
        return next(errorHandler(401, 'You can only update your own account!'));
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                },
            },
            { new: true }
        );

        if (!updatedUser) {
            // Handle case where user with the given ID is not found
            return next(errorHandler(404, 'User not found'));
        }

        // Omit password from the response
        const { password, ...rest } = updatedUser.toObject(); // Use toObject to get a plain JavaScript object

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
