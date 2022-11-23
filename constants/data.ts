//@ts-nocheck
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, ISkill, Service } from "./type";

export const services: Service[] = [
  {
    title: "FrontEnd Development",
    about:
      "I can build a beatutiful and scalable using <strong> HTML5 </strong>, <strong> CSS3 </strong> and <strong> JavaScript </strong> and its library <strong>ReactJS</strong>",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about: "Handle and make connections of endpoints coming from API server",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about: "I can develop robust REST APIs using the websites",
    Icon: AiOutlineApi,
  },
  {
    title: "Competetive Coder",
    about:
      "A daily problem solver and find bugfixes in <strong>HackerRank</strong> and proceeeding projects",
    Icon: AiOutlineApi,
  },
  {
    title: "UI/UX Design",
    about: "Get the exact points in design and turn them into live",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Personal",
    about: "Always use the newest technologies and pursue of the updates",
    Icon: MdDeveloperMode,
  },
];


export const languages: ISkill[] = [
  {
    name: "Python",
    level: "60%",
    Icon: BsCircleFill
  },
  {
    name: "Javascript",
    level: "85%",
    Icon: BsCircleFill
  },
  {
    name: "ReactJS",
    level: "90%",
    Icon: BsCircleFill
  },
  {
    name: "Typescript",
    level: "80%",
    Icon: BsCircleFill
  },
  {
    name: "NextJs",
    level: "90%",
    Icon: BsCircleFill
  },
  {
    name: "React Native",
    level: "70%",
    Icon: BsCircleFill
  },
]

export const tools: ISkill[] = [
  {
    name: "Figma",
    level: "85%",
    Icon: BsCircleFill
  },
  {
    name: "Framer",
    level: "80%",
    Icon: BsCircleFill
  },
  {
    name: "AdobeXD",
    level: "90%",
    Icon: BsCircleFill
  },
  {
    name: "Git & GitHub",
    level: "90%",
    Icon: BsCircleFill
  },
  {
    name: "NextJs",
    level: "70%",
    Icon: BsCircleFill
  },
]

export const projects: IProject[] = [
  {
    name: "Pizza Delivery App",
    description: "You can place an order for pizza with this app.",
    image_path: "/images/pizza.png",
    deployed_url: "https://lutfullah-pizza.netlify.app/",
    github_url: "https://github.com/lutfullahcelenk/NextJs-FoodOrderingApp",
    category: ["nextJS"],
    key_techs: ["NextJS", "ModuleCSS", "Redux"]
  },
  {
    name: "Blog",
    description: "This is my personal blog portfolio",
    image_path: "/images/blog.png",
    deployed_url: "https://lutfullahcelenk.netlify.app",
    github_url: "https://github.com/lutfullahcelenk/lutfullah-celenk-blog",
    category: ["nextJS"],
    key_techs: ["NextJS", "TailwindCSS", "FramerMotion"]
  },
  {
    name: "SpaceX",
    description: "This is the website for SpaceX and you can find more information about rockets, launches and astrounots",
    image_path: "/images/spacex.png",
    deployed_url: "https://lutfullah-spacex.netlify.app",
    github_url: "https://github.com/lutfullahcelenk/spacex",
    category: ["reactJS"],
    key_techs: ["ReactJS", "TailwindCSS", "ContextAPI"]
  },
  {
    name: "Lutfullah Gaming",
    description: "This is the website for pointing gaming",
    image_path: "/images/gaming.png",
    deployed_url: "https://lutfullahgaming.netlify.app",
    github_url: "https://github.com/lutfullahcelenk/lutfullah-gaming-app",
    category: ["reactJS"],
    key_techs: ["ReactJS", "MaterialUI", "Redux"]
  },
  {
    name: "Lutfullah TODO",
    description: "This is a TODO app",
    image_path: "/images/todo.png",
    deployed_url: "https://lutfullah-todo-app.netlify.app",
    github_url: "https://github.com/lutfullahcelenk/casestudy-todo-app",
    category: ["reactJS"],
    key_techs: ["ReactJS", "Antd", "ContextAPI"]
  },
  {
    name: "Kodegon Demo",
    description: "This is a case study for Kodegon Company.",
    image_path: "/images/kodegon.png",
    deployed_url: "https://lutfullah-kodegondemo.netlify.app/",
    github_url: "https://github.com/lutfullahcelenk/kodegon-demo",
    category: ["reactJS"],
    key_techs: ["ReactJS", "Mansory", "TailwindCSS","TypeScript", "Slick Carousel"]
  },
  {
    name: "Search Engine System",
    description: "This is a case study for TesoDEV. It consists of search engine systema and CRUD operations",
    image_path: "/images/searchEngineSystem.png",
    deployed_url: "https://lutfullah-searchengine.netlify.app/",
    github_url: "https://github.com/lutfullahcelenk/search-engine-system",
    category: ["reactJS"],
    key_techs: ["ReactJS", "Search", "TailwindCSS","TypeScript", "Swiper"]
  },
  {
    name: "Admin Panel",
    description: "This is an admin panel made with NextJS",
    image_path: "/images/adminPanel.png",
    deployed_url: "https://lutfullah-adminpanel.netlify.app/",
    github_url: "https://github.com/lutfullahcelenk/admin-panel",
    category: ["nextJS"],
    key_techs: ["NextJS", "Redux", "TailwindCSS","TypeScript", "Dynamic Routes"]
  },
  {
    name: "Customer Services Panel",
    description: "This is a panel which can logged in both as an admin or as a user. The displays are different from each other.",
    image_path: "/images/customerServices.png",
    deployed_url: "https://lutfullah-customerservices.netlify.app/",
    github_url: "https://github.com/lutfullahcelenk/customer-services",
    category: ["reactJS"],
    key_techs: ["ReactJS", "Redux Toolkit", "TailwindCSS","TypeScript", "Admin Panel"]
  },
  {
    name: "JWT Authentication System",
    description: "This is a login & register panel. I used firebase and google authentication for this project.",
    image_path: "/images/jwt.png",
    deployed_url: "https://lutfullah-auth.netlify.app/auth",
    github_url: "https://github.com/lutfullahcelenk/jwt-authentication-app",
    category: ["reactJS"],
    key_techs: ["ReactJS", "Redux Toolkit", "TailwindCSS","TypeScript", "Authentication"]
  },

]