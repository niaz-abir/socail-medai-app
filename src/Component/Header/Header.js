import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import "./Header.css";
import { Authcontext } from "../Context/Authprovider";
const Header = () => {
  const { user, logout } = useContext(Authcontext);
  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar px-4 py-4 bg-black text-pink-700 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link className="nav-link" to="/media">
                  Media
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/message">
                  Message
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <button className="nav-link">Logout</button>
              </li>
            </ul>
          </div>
          <div></div>
          <Link to="/">
            <a className="btn btn-ghost normal-case text-3xl">Frostlite</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-1xl nav-link font-bold" to="/media">
                Media
              </Link>
            </li>
            <li>
              <Link className="text-1xl  nav-link font-bold" to="/message">
                Message
              </Link>
            </li>
            <li>
              <Link className="text-1xl nav-link font-bold" to="/about">
                About
              </Link>
            </li>
            {user ? (
              <li>
                <button onClick={handlelogout} className="nav-link">
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link className="text-1xl nav-link font-bold" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
