import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({
  title,
  description,
  link,
  img,
  github,
  skills,
}) => {
  return (
    <div className="lg:w-[500px] w-[400px] h-[] flex flex-col border border-gray-800 hover:border-2 px-5 py-6 rounded-md hover:scale-[1.05] bg-slate-700 text-gray-200">
      <div>
        <img className=" w-full rounded-sm " src={img} alt="" />
      </div>
      <div className="w-full border-t-2 border-gray-800 mt-3" />
      <div className="mt-5">
        <div className="flex justify-between mb-3">
          <h1 className="font-VN font-semibold text-[22px] text-gray-100 ">
            {title}
          </h1>
          {link && (
            <div>
              <a
                className="hover:text-gray-300 hover:underline cursor-pointer font-semibold flex gap-x-3 items-center"
                href={link}
                target="blank"
              >
                <p>App link</p> <ExternalLink className="size-5" />
              </a>
            </div>
          )}
        </div>
        <p className="text-[14px] text-gray-200 font-medium">{description}</p>
        <div className="mt-4 flex">
          <h2 className="font-semibold">Skills: &nbsp;</h2>
          <ul className="list-disc ">
            {skills?.map((skill) => {
              return (
                <li
                  key={skill}
                  className="inline-block py-0.5 px-2 border-slate-800 border-2 rounded-full cursor-default hover:shadow-md bg-slate-600 hover:bg-slate-700 text-gray-100 mx-1 text-sm mb-1"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-3 text-center">
          <a
            className="hover:text-gray-300 hover:underline cursor-pointer font-semibold inline-block  gap-x-3"
            href={github}
            target="blank"
          >
            Github <Github className="inline-block size-5" />
          </a>
        </p>
      </div>
    </div>
  );
};
