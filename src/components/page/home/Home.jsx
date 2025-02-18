import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-600 text-gray-200 px-[264px] bg-[url(https://img.freepik.com/free-vector/black-abstract-background_1393-348.jpg?t=st=1739782559~exp=1739786159~hmac=c7c11b4fdaf9d7b2dfa86d15504ee7eeb5704367af1b01f1e31d9c2e8fd08ab9&w=996)] opacity-90">
      <div className="flex">
        <div className="text-[60px] font-bold font-DM py-20">
          Hi, <br />
          I'm <span className="text-[#ed3a6a] font-VN">Vinay</span> <br />
          MERN Developer <br />
          <div className="text-[18px] font-normal">
            Passionate about problem-solving and building scalable software
            solutions.
          </div>
          <div>
            <Button
              className="bg-[#1b689b] text- hover:text-white hover:bg-[#3ba0e3] border-1 font-DN text-[20px] px-6 py-5 rounded-sm"
              onClick={() => navigate("/about")}
            >
              Know more
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
