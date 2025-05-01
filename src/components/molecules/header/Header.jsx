import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky z-50 top-0 shadow bg-slate-700">
      <nav className="text-gray-300 font-semibold px-6 md:px-16 lg:px-[140px] py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-bold text-[25px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Vinay Duryodhan
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          {isOpen ? (
            <X
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Normal view */}
        <div className="hidden lg:flex lg:space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-300" : "text-gray-300"
              } hover:text-orange-300 transition duration-200`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-300" : "text-gray-300"
              } hover:text-orange-300 transition duration-200`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-300" : "text-gray-300"
              } hover:text-orange-300 transition duration-200`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-slate-800 text-center py-6 shadow-lg z-40 lg:hidden">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-300" : "text-gray-300"
                } block py-3 hover:bg-slate-700`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-300" : "text-gray-300"
                } block py-3 hover:bg-slate-700`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-300" : "text-gray-300"
                } block py-3 hover:bg-slate-700`
              }
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
