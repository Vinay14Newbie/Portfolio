import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="sticky z-50 top-0 shadow px-[140px] bg-slate-700">
        <nav className=" text-gray-300 font-semibold px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div>Vinay Duryodhan</div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-300" : "text-gray-300"
                      } block py-2 pr-4 pl-3 duration-200 border-b "border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0"`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-300" : "text-gray-300"
                      } block py-2 pr-4 pl-3 duration-200 border-b "border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0"`
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-300" : "text-gray-300"
                      } block py-2 pl-3 duration-200 border-b "border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-300 lg:p-0"`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
