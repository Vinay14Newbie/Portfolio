import React from "react";
import { Link } from "react-router-dom";
import { LinkedinIcon, Mail, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="px-[140px] bg-slate-700">
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
                <Link to="/about">About</Link>
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
