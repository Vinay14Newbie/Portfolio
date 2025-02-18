import { Button } from "@/components/ui/button";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-600 text-gray-200 pl-[264px] pr-[300px] bg-[url(https://img.freepik.com/free-vector/black-abstract-background_1393-348.jpg?t=st=1739782559~exp=1739786159~hmac=c7c11b4fdaf9d7b2dfa86d15504ee7eeb5704367af1b01f1e31d9c2e8fd08ab9&w=996)] opacity-90">
      <div className="flex">
        <div className="text-[60px] font-bold font-DM py-20">
          Hi, <br />
          I'm <span className="text-[#ed3a6a] font-VN">Vinay</span> <br />
          MERN Developer <br />
          <div className="text-[18px] font-normal">
            Hi, I'm Vinay, a final-year B.Tech Electrical Engineering student at
            RCERT, Chandrapur, passionate about problem-solving and building
            scalable software solutions. With strong grip in Data structures and
            Algorithms, have solved over 300 problems on platforms like LeetCode
            and GeeksforGeeks. My primary interest lies in web development,
            especially backend development. I’m seeking opportunities as a
            Software Engineer to contribute my skills, grow professionally, and
            tackle real-world challenges.
          </div>
          <div>
            <Button
              className="bg-[#1b689b]  hover:text-white hover:bg-[#2b80b9] border-1 font-DN text-[20px] px-6 py-5 rounded-sm"
              onClick={() => navigate("/contact")}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-DM text-[45px] font-semibold">Social Links</h1>
        <ul>
          <li className="bg-[#ed3a6a] inline-block px-2 py-2 rounded-full text-[20px]">
            <a href="https://www.linkedin.com/in/vinay-duryodhan-53524b273/">
              <Linkedin />
            </a>
          </li>
          <li className="bg-[#ed3a6a] inline-block px-2 py-2 rounded-full text-[20px]">
            <a href="https://www.linkedin.com/in/vinay-duryodhan-53524b273/">
              <GithubIcon />
            </a>
          </li>
          <li className="bg-[#ed3a6a] inline-block px-2 py-2 rounded-full text-[20px]">
            <a href="https://www.linkedin.com/in/vinay-duryodhan-53524b273/"></a>
          </li>
          <li className="bg-[#ed3a6a] inline-block px-2 py-2 rounded-full text-[20px]">
            <a href="https://www.linkedin.com/in/vinay-duryodhan-53524b273/">
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
