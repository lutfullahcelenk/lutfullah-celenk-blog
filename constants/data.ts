//@ts-nocheck
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { ISkill, Service } from "./type";

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