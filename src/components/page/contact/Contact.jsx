import { motion } from "framer-motion";
import { ContactForm } from "@/components/molecules/contactForm/ContactForm";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <motion.div
      className="px-[164px] flex flex-col justify-center items-center pt-16 bg-slate-600 text-gray-200 bg-[url(https://img.freepik.com/free-photo/dark-geometric-background-with-copy-space_24972-1816.jpg?ga=GA1.1.569627644.1734773229&semt=ais_hybrid)] opacity-90 bg-fixed"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center gap-y-12">
        <motion.div
          className="font-VN text-[60px] leading-[8rem]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Want to say Hello...
        </motion.div>

        <motion.div
          className="w-[500px]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      <div className="flex items-center justify-between my-20">
        <motion.div
          className="mr-20"
          initial={{ rotate: -5 }}
          animate={{
            rotate: [0, -5, 5, 0],
            transition: { repeat: Infinity, duration: 4, ease: "linear" },
          }}
        >
          <motion.img
            src="https://img.freepik.com/free-vector/cute-cat-fishing-fish-moon-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated_138676-9612.jpg?ga=GA1.1.569627644.1734773229&semt=ais_hybrid"
            alt="Cat"
            className="rounded-s-full size-80"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { type: "spring", stiffness: 200 },
            }}
          />
        </motion.div>

        <div className="flex flex-col gap-5 mb-3">
          <motion.a
            href="mailto:vinayduryodhan510@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gray-300 hover:bg-gray-400 text-slate-800 hover:text-white border-1">
              <MailIcon /> Mail
            </Button>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vinay-duryodhan-53524b273/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gray-300 hover:bg-gray-400 text-slate-800 hover:text-white border-1">
              <LinkedinIcon /> LinkedIn
            </Button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
