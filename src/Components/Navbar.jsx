import React, { useState } from "react";
import { Link } from "react-router-dom";
// import HeroSection from "./HeroSection";
export default function Navbar() {
  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Movies", path: "/#ALL" },
    { title: "About", path: "/about" },
    { title: "Feedback", path: "/Feedback" },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8 ">
        <div className="flex-none lg:flex-initial">
          <Link to="/">
            <img src="/logo.svg" width={40} height={50} alt=" UI logo" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none  ${
              menuState ? "" : "hidden"
            }`}>
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-800 hover:text-indigo-600 ">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <button
              className="outline-none text-gray-400 block lg:hidden "
              onClick={() => setMenuState(!menuState)}>
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  transition-transform transform rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all duration-300 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
