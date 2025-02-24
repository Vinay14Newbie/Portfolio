import { Button } from "@/components/ui/button";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gfg_logo from "../../../assets/geeksforgeeks-svg.svg";
import leetcode_logo from "../../../assets/leetcode-svg.svg";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-600 text-gray-200 pl-[264px] pr-[360px] bg-[url(https://img.freepik.com/free-photo/dark-geometric-background-with-copy-space_24972-1816.jpg?ga=GA1.1.569627644.1734773229&semt=ais_hybrid)] opacity-90 bg-fixed">
      <div className="flex">
        <div className="text-[60px] font-bold font-DM pt-14">
          Hi, <br />
          I'm <span className="text-[#ed3a6a] font-VN">Vinay</span> <br />
          MERN Developer <br />
          <div className="text-[18px] font-normal">
            Final-year B.Tech Electrical Engineering student at RCERT,
            Chandrapur, passionate about problem-solving and building scalable
            software solutions.
          </div>
          <p className="text-[30px] font-semibold font-VN mt-10 ">
            A Developer has many hats to wear...!
          </p>
          <div className="mt-4">
            <Button
              className="bg-[#1b689b]  hover:text-white hover:bg-[#2b80b9] border-1 font-DN text-[20px] px-6 py-5 rounded-sm"
              onClick={() => navigate("/contact")}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-10">
        <h1 className="font-DM text-[28px] font-normal">Social Links</h1>
        <ul className="w-full flex gap-x-6 mt-3">
          <li className="bg-[#ed3a6a] inline-block px-2 py-2 rounded-full text-[20px] hover:scale-[1.05] hover:bg-[#e84c75]">
            <a href="https://www.linkedin.com/in/vinay-duryodhan-53524b273/">
              <Linkedin className="w-[25px] text-black" />
            </a>
          </li>
          <li className="bg-[#ed3a6a] inline-block px-2 py-2 rounded-full text-[20px] hover:scale-[1.05] hover:bg-[#e84c75]">
            <a href="https://github.com/Vinay14Newbie">
              <GithubIcon className="w-[25px] text-black" />
            </a>
          </li>
          <li className="bg-[#ed3a6a] inline-block px-2 py-2 rounded-full text-[20px] hover:scale-[1.05] hover:bg-[#e84c75]">
            <a href="https://leetcode.com/Vinay_000000/">
              <img className="w-[25px]" src={leetcode_logo} alt="" />
            </a>
          </li>
          <li className="bg-[#ed3a6a] inline-block px-2 py-2 rounded-full text-[20px] hover:scale-[1.05] hover:bg-[#e84c75]">
            <a
              href="https://www.geeksforgeeks.org/user/vinay_0000000/"
              className="text-white"
            >
              <img className="w-[25px]" src={gfg_logo} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
