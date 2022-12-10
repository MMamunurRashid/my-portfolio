import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 justify-between">
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
                <a href="/" className="text-xl font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-xl font-semibold">
                  About Me
                </a>
              </li>
              <li>
                <a href="/" className="text-xl font-semibold">
                  My Skills
                </a>
              </li>
              <li>
                <a href=" #project" className="text-xl font-semibold">
                  My Project
                </a>
              </li>
              <li>
                <a href="/" className="text-xl font-semibold">
                  Resume
                </a>
              </li>
              <li>
                <a href="/" className="text-xl font-semibold">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost normal-case text-4xl font-serif font-bold"
          >
            Mamun's Portfolio
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/" className="text-xl font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold">
                About Me
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold">
                My Skills
              </a>
            </li>
            <li>
              <a href="#project" className="text-xl font-semibold">
                My Project
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold">
                Resume
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
