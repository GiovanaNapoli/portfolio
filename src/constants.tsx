import { RiGithubLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { CoursesType } from "./types";

export const courses: CoursesType[] = [
  {
    name: "React: identificando problemas de performance com o Google Lighthouse",
    link: "https://cursos.alura.com.br/certificate/af7b68f4-68ed-421b-a4f9-eec4c75b5d67?lang",
  },
];

export const social = [
  {
    Icon: <IoLogoLinkedin size={24} />,
    link: "https://www.linkedin.com/in/giovana-aparecida-napoli-da-silva/",
    name: "Linkedin",
  },
  {
    Icon: <RiGithubLine size={24} />,
    link: "https://github.com/GiovanaNapoli",
    name: "Github",
  },
];
