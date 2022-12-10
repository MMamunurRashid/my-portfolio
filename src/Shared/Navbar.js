import React from "react";

const Navbar = () => {
  return (
    <div className="font-serif">
      <div className=" fixed  shadow-md  bg-slate-200 w-full z-50  py-2  md:flex md:justify-between md:items-center md:px-20 px-5 ">
        <div className="">
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
                <a href=" #project" className="text-xl font-semibold">
                  My Project
                </a>
              </li>

              <li>
                <a href="#skills" className="text-xl font-semibold">
                  My Skills
                </a>
              </li>
              <li>
                <a href="aboutMe" className="text-xl font-semibold">
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1MoJ-XuMi84n08jBOpDk32Mxb0EIl1Y9O/view?usp=sharing"
                  className="text-xl font-semibold"
                >
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
            className="btn btn-ghost normal-case md:text-4xl text-2xl font-serif font-bold"
          >
            Mamun's Portfolio
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home" className="text-xl font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#project" className="text-xl font-semibold">
                My Project
              </a>
            </li>
            <li>
              <a href="#skills" className="text-xl font-semibold">
                My Skills
              </a>
            </li>
            <li>
              <a href="#aboutMe" className="text-xl font-semibold">
                About Me
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1MoJ-XuMi84n08jBOpDk32Mxb0EIl1Y9O/view?usp=sharing"
                target="_blank"
                className="text-xl font-semibold"
                rel="noreferrer"
              >
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
