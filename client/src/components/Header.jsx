import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-400 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <h1 className="font-semibold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-slate-700">MarketInLab</span>
            <span className="text-slate-1000">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline text-lg m-3">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline text-lg m-3">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                className="rounded-full h-12 w-12 object-cover"
                alt="User Profile Image"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
