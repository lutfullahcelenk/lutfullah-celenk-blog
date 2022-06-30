//@ts-nocheck
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/ai";

interface IService {
  title: string;
  about: string;
  Icon: any;
}

export const services: IService[] = [
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
      "a daily problem solver and find bugfixes in <strong>HackerRank</strong> and proceeeding projects",
    Icon: AiOutlineApi,
  },
  {
    title: "UI/UX Design",
    about: "get the exact points in design and turn them into live",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Personal",
    about: "always use the newest technologies and pursue of the updates",
    Icon: RiComputerLine,
  },
];
