import React from "react";
import { Link } from "react-router-dom";
import { LinkedinIcon, Mail, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="bg-gray-300 px-4 flex flex-col items-center">
          <div className="flex flex-col items-center gap-x-5">
            <div>
              <p className="">FULL OF MADNESS</p>
              <p className="text-[140px] ">LET'S TALK</p>
            </div>
            <div className="flex gap-5 mb-3">
              <a href="mailto:vinayduryodhan510@gmail.com">
                <Button className="bg-gray-300 text-slate-700 hover:text-white border-1">
                  Mail
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/vinay-duryodhan-53524b273/">
                <Button className="bg-gray-300 text-slate-700 hover:text-white border-1">
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-2 bg-slate-700 text-gray-300 font-semibold py-2">
          <div className="flex gap-x-5">
            <p>Copyright &copy;</p>
            <a href="mailto:vinayduryodhan510@gmail.com">
              <p className="flex gap-x-2 cursor-pointer hover:text-gray-100">
                <Mail />
                vinayduryodhan510
              </p>
            </a>
          </div>
          <div>
            <ul className="flex gap-x-6">
              <li className="hover:text-orange-300">
                <Link to="/home">Home</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="hover:text-orange-300">
                <Link to="/about">About</Link>
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
