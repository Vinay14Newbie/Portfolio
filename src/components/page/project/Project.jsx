import { ProjectCard } from "@/components/molecules/projectCard/ProjectCard";
import ai_summariser_pic from "../../../assets/ai_text_summariser_pic.png";
import redbus_pic from "../../../assets/redbus_pic.png";
import imagegram_pic from "../../../assets/image-gram-pic.jpeg";
import slack_pic from "../../../assets/slack-app.png";

export const Project = () => {
  return (
    <div className="px-[164px] bg-slate-700 py-8 grid grid-cols-2 gap-6 bg-[url(https://img.freepik.com/free-photo/dark-geometric-background-with-copy-space_24972-1816.jpg?ga=GA1.1.569627644.1734773229&semt=ais_hybrid)] opacity-90 bg-fixed">
      <ProjectCard
        title={"Messaging App"}
        description={
          "•	Developed a scalable Messaging App with Node.js and React.js.   •	Built a Express.js backend server for efficient API handling, used MVC architecture for backend and managed database using MongoDB.   •	Used Socket-IO for low-latency, bidirectional communication and integrated Quill text editor to create, format and edit content.    •	Integrated AWS s3 for storing media. Used JWT and Zod validators for secure and valid user authentication.  •	Implemented payment gateway using Razorpay."
        }
        img={slack_pic}
        github={"https://github.com/Vinay14Newbie/Slack-Messaging-App-Frontend"}
        skills={[
          "Node.js",
          "Express.js",
          "MongoDB",
          "React.js",
          "Socket-IO",
          "Razorpay",
          "Mongoose ODM",
          "Aws s3",
          "Model-View-Controller (MVC)",
          "JSON Web Token (JWT)",
          "User Authentication",
        ]}
      />
      <ProjectCard
        title={"ImageGram- CRUD APIs"}
        description={
          "CRUD APIs for Image-Gram, where user can register themself for posting images with caption. Used JWT for secure user authentication and Bcrypt for encrypting user passwords. Integrated AWS S3 for handling image uploads on the backend. Managed the database using Mongoose."
        }
        img={imagegram_pic}
        github={"https://github.com/Vinay14Newbie/Image-Gram"}
        skills={[
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose ODM",
          "Model-View-Controller (MVC)",
          "Aws s3",
          "JSON Web Token (JWT)",
          "User Authentication",
        ]}
      />
      <ProjectCard
        title={"AI Text Summarizer"}
        description={
          "An AI integrated application which uses Hugging Face API to summarize the provided input text. Used Express.js for handling the POST request from the user for text Summary."
        }
        link={"https://ai-text-summarizer-srjf.onrender.com/"}
        img={ai_summariser_pic}
        github={"https://github.com/Vinay14Newbie/AI-Text-Summarizer-"}
        skills={["HTML", "CSS", "JavaScript", "Node.js", "Express.js"]}
      />
      <ProjectCard
        title={"Red Bus Clone"}
        description={"Red bus clone using HTML and Tailwind CSS"}
        link={"https://web-dev-projects-two.vercel.app/"}
        img={redbus_pic}
        github={
          "https://github.com/Vinay14Newbie/Web-Dev-Projects/tree/master/Red_Bus_Clone"
        }
        skills={["HTML", "Tailwind-CSS"]}
      />
    </div>
  );
};
