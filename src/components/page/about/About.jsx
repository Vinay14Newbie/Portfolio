import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gfg_logo from "../../../assets/geeksforgeeks-svg.svg";
import leetcode_logo from "../../../assets/leetcode-svg.svg";

export const About = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-slate-600 text-gray-200 px-4 md:px-16 lg:px-[264px] py-12 bg-[url(https://img.freepik.com/free-photo/dark-geometric-background-with-copy-space_24972-1816.jpg?ga=GA1.1.569627644.1734773229&semt=ais_hybrid)] opacity-90 bg-fixed"
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-bold font-DM">
            Hi, <br />
            I'm <span className="text-[#ed3a6a] font-VN">Vinay</span> <br />
            MERN Developer
          </h1>
          <motion.p
            className="text-[16px] md:text-[18px] font-normal mt-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Final-year Engineering student at RCERT, Chandrapur, passionate
            about problem-solving and building scalable software solutions.
          </motion.p>
          <motion.p
            className="text-[24px] md:text-[28px] lg:text-[30px] font-semibold font-VN mt-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A Developer has many hats to wear...!
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              className="bg-[#1b689b] hover:text-white hover:bg-[#2b80b9] border-1 font-DN text-[16px] md:text-[20px] px-4 md:px-6 py-3 md:py-4 rounded-sm"
              onClick={() => navigate("/contact")}
            >
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* Social Links */}
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
    </motion.div>
  );
};
