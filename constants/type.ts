//@ts-nocheck
import { IconType } from "react-icons";

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}