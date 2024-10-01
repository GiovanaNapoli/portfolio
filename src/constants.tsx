import { IoLogoLinkedin } from "react-icons/io";
import { ImGithub } from "react-icons/im";
import { CoursesType } from "./types";

export const courses: CoursesType[] = [
  {
    foundation: "Alura",
    name: "Identificando Problemas de Performance com o Google Lighthouse",
    date: "2024",
  },
  {
    foundation: "Alura",
    name: "Node.js: criando uma API Rest com Express e MongoDB",
    date: "2024",
  },
  {
    foundation: "Alura",
    name: "React: conhecendo a biblioteca React Router",
    date: "2023",
  },
  {
    foundation: "Alura",
    name: "React: lidando com arquivos estaticos",
    date: "2023",
  },
  {
    foundation: "Alura",
    name: "React: escrevendo com Typescript",
    date: "2023",
  },
  {
    foundation: "Udemy",
    name: "Crie uma Web API com Asp.NET core 3.1 + EF Core 3.1 + Docker",
    date: "2020",
  },
];

export const social = (iconSize = 24) => {
  return [
    {
      Icon: <IoLogoLinkedin size={iconSize} />,
      link: "https://www.linkedin.com/in/giovana-aparecida-napoli-da-silva/",
      name: "Linkedin",
    },
    {
      Icon: <ImGithub size={iconSize} />,
      link: "https://github.com/GiovanaNapoli",
      name: "Github",
    },
  ];
};
