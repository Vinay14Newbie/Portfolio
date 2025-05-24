import { ProjectCard } from "@/components/molecules/projectCard/ProjectCard";
import ai_summariser_pic from "../../../assets/ai_text_summariser_pic.png";
import redbus_pic from "../../../assets/redbus_pic.png";
import imagegram_pic from "../../../assets/image-gram-pic.jpeg";
import slack_pic from "../../../assets/slack-app.png";
import currency_converter from "../../../assets/currency_converter.png";
import to_do_list from "../../../assets/to_do_list.png";
import communion_app from "../../../assets/communion-app.png";
import pokemon_explorer from "../../../assets/pokemon_explorer.png";
import coupon_distribution from "../../../assets/coupon_distribution.png";
import school_finder from "../../../assets/school_finder.png";
import todo_summary_assistant from "../../../assets/todo_summary_pic.png";
import { useEffect } from "react";

export const Project = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on every refresh or route
  }, []);
  return (
    <div className="px-[164px] md:px-16 lg:px-[164px]  bg-slate-700 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[url(https://img.freepik.com/free-photo/dark-geometric-background-with-copy-space_24972-1816.jpg?ga=GA1.1.569627644.1734773229&semt=ais_hybrid)] opacity-90 bg-fixed justify-items-center">
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
        title={"Todo Summary Assistant "}
        description={
          "•	Developed a Full stack web application using MERN stack to manage and track personal to-dos in real time. MongoDB as a database to store the to-dos.•	Incorporated Cohere’s AI language model to summarize all pending to-dos. Connected the app to Slack via webhook to automate summary and send it to the team or channel. •	Implemented full CRUD functionality and responsive UI for better user experience."
        }
        img={todo_summary_assistant}
        github={"https://github.com/Vinay14Newbie/Todo-Summary-Assistant"}
        skills={[
          "Slack Webhook",
          "LLM Model",
          "Node.js",
          "React.js",
          "Tailwind-CSS",
          "Express.js",
          "MongoDB",
          "Mongoose ODM",
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
        title={"School Finder"}
        description={
          "Developed a location-based school search application which allow users to find nearby schools based on their inputted address. Integrated an address search API to dynamically fetch latitude and longitude, enabling accurate geolocation. Implemented geospatial sorting using the Haversine formula, ranking schools by proximity with high accuracy. Designed an optimized paginated results system in MySQL, ensuring efficient data retrieval and display. Built a Responsive and user-friendly UI using React.js and Tailwind CSS, enhancing navigation and accessibility."
        }
        img={school_finder}
        github={"https://github.com/Vinay14Newbie/School-Finder"}
        skills={["Node.js", "Express.js", "MySQL", "React.js", "Tailwind-CSS"]}
      />
      <ProjectCard
        title={"Communion App"}
        description={
          "Developed a responsive event management web app using React.js, Tailwind CSS and Motion library for animation. Used local storage to persist user-created events and maintain state across sessions. Combined dynamic event filtering feature by category (Religious, Social, Charity). Incorporated an overlay form with smooth animations for a better user experience."
        }
        link={"https://communion-app-ruby.vercel.app/"}
        img={communion_app}
        github={"https://github.com/Vinay14Newbie/Communion-App"}
        skills={["React.js", "Tailwind-CSS", "Motion library"]}
      />
      <ProjectCard
        title={"Coupon Distribution App"}
        description={
          "Round-Robin Coupon Distribution. A live web app that distributes coupons to guest users in a round-robin manner with abuse prevention using IP and cookie tracking to restrict multiple claims from the same user. (Note: The app may take some time to respond as the backend is deployed on Render's free tier, which can cause delays due to inactivity..:)"
        }
        link={"https://coupon-distribution-zeta.vercel.app/"}
        img={coupon_distribution}
        github={"https://github.com/Vinay14Newbie/Coupon-Distribution"}
        skills={[
          "Node.js",
          "Cookies",
          "Express.js",
          "React.js",
          "Tailwind-CSS",
          "CORS",
        ]}
      />
      <ProjectCard
        title={"Pokemon Explorer"}
        description={
          "Pokémon Explorer is a React app that displays Pokémon data using PokeAPI. It supports searching Pokémon by name, fetching paginated data, and displaying detailed information like abilities, types, and moves. Built with React Router, Axios, and styled using Tailwind CSS."
        }
        link={"https://pokemon-explorer-lovat.vercel.app/"}
        img={pokemon_explorer}
        github={"https://github.com/Vinay14Newbie/Pokemon-Explorer"}
        skills={["React.js", "Tailwind-CSS", "Axios"]}
      />
      <ProjectCard
        title={"Currency Converter"}
        description={
          "A dynamic and user-friendly currency converter application using React.js and Tailwind CSS. Integrated currency conversion API to fetch live exchange rates."
        }
        link={"https://currency-converter-wheat-ten.vercel.app/"}
        img={currency_converter}
        github={"https://github.com/Vinay14Newbie/Currency-Converter"}
        skills={["React.js", "Tailwind-CSS", "API fetching"]}
      />
      <ProjectCard
        title={"AI Text Summarizer"}
        description={
          "An AI integrated application which uses Hugging Face API to summarize the provided input text. Used Express.js for handling the POST request from the user for text Summary."
        }
        link={"https://ai-text-summarizer-srjf.onrender.com/"}
        img={ai_summariser_pic}
        github={"https://github.com/Vinay14Newbie/AI-Text-Summarizer-"}
        skills={[
          "Hugging Face API",
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "Express.js",
        ]}
      />
      <ProjectCard
        title={"To Do List"}
        description={
          "Classic To-do list app using React.js, used context-API for state management. User also can edit the task if needed."
        }
        link={"https://to-do-list-taupe-mu.vercel.app/"}
        img={to_do_list}
        github={"https://github.com/Vinay14Newbie/To-Do-List"}
        skills={["React.js", "Tailwind-CSS", "Context-API"]}
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
