import { RiTwitterLine, RiGithubLine, RiLinkedinFill } from "react-icons/ri";
import { CoursesType } from "./types";

export const courses: CoursesType[] = [
  {
    name: "React: identificando problemas de performance com o Google Lighthouse",
    link: "https://cursos.alura.com.br/certificate/af7b68f4-68ed-421b-a4f9-eec4c75b5d67?lang",
  },
];

export const social = [
  {
    icon: <RiLinkedinFill size={26} />,
    link: "https://www.linkedin.com/in/giovana-aparecida-napoli-da-silva/",
    name: "Linkedin",
  },
  {
    icon: <RiGithubLine size={26} />,
    link: "https://github.com/GiovanaNapoli",
    name: "Github",
  },
  {
    icon: <RiTwitterLine size={26} />,
    link: "https://twitter.com/Genova_Trakinas",
    name: "Twitter",
  },
];
