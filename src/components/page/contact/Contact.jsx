import { ContactForm } from "@/components/molecules/contactForm/ContactForm";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <div className="px-[164px] flex flex-col justify-center items-center pt-16 bg-slate-600 text-gray-200 bg-[url(https://img.freepik.com/free-photo/dark-geometric-background-with-copy-space_24972-1816.jpg?ga=GA1.1.569627644.1734773229&semt=ais_hybrid)] opacity-90 bg-fixed">
      <div className="flex flex-col items-center gap-y-12">
        <div className="font-VN text-[60px] leading-[8rem]">
          Want to say Hello...
        </div>

        <div className="w-[500px]">
          <ContactForm />
        </div>
      </div>

      <div className="flex items-center justify-between my-20">
        <div className="mr-20">
          <img
            src="https://img.freepik.com/free-vector/cute-cat-fishing-fish-moon-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated_138676-9612.jpg?ga=GA1.1.569627644.1734773229&semt=ais_hybrid"
            alt=""
            className="rounded-s-full size-80"
          />
        </div>
        <div className="flex flex-col gap-5 mb-3">
          <a href="mailto:vinayduryodhan510@gmail.com">
            <Button className="bg-gray-300 hover:bg-gray-400 text-slate-800 hover:text-white border-1">
              <MailIcon /> Mail
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/vinay-duryodhan-53524b273/">
            <Button className="bg-gray-300 hover:bg-gray-400 text-slate-800 hover:text-white border-1">
              <LinkedinIcon /> LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
