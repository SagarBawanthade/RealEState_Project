import { Link } from "react-router-dom";

export default function Signout() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-center font-bold my-7 ">Sign Up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Enter your username..."
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Enter your email..."
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="Enter your password..."
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 text-bold">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
