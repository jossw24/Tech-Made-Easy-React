import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-200 py-2">
      <div className="max-w-7xl mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/literacy">Literacy</Link>
              </li>
              <li>
                <Link to="/health">Health</Link>
              </li>
              <li>
                <Link to="/safety">Safety</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl">
            TechMadeEasy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/" className="btn btn-ghost normal-case text-2xl">
                Home
              </Link>
            </li>
            <li tabIndex="0">
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search modules..."
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
