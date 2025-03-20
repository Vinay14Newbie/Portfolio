import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 py-3 px-4 md:px-16 lg:px-[264px]">
      <div>
        <div className="flex justify-between lg:px-6 text-gray-300 font-semibold py-2">
          <div className="flex gap-x-5">
            <p>Copyright &copy;</p>
            <a href="mailto:vinayduryodhan510@gmail.com">
              <p className="flex gap-x-2 cursor-pointer hover:text-gray-100">
                <Mail />
                vinayduryodhan510@gmail.com
              </p>
            </a>
          </div>
          <div>
            <ul className="flex lg:space-x-8">
              <li className="hover:text-orange-300">
                <Link to="/">About</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
