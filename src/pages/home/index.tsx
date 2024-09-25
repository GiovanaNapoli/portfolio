import "../../index.css";

import { social } from "../../constants";
import useTheme from "../../store/theme";
const Home = () => {
  const { isDarkTheme } = useTheme();
  console.log("theme", isDarkTheme);
  console.log(`${isDarkTheme ? "dark" : ""}`);
  return (
    <div className="flex flex-col w-full max-w-3xl">
      <div className="h-16" />
      <main className="grid grid-flow-row mt-16 px-8 gap-2 md:grid-flow-col">
        <div className="flex justify-center order-1 md:order-2 md:justify-end">
          <img
            src="./Eu.jpg"
            alt="Avatar"
            className="size-36 rounded-full object-cover"
          />
        </div>
        <div
          id="about"
          className="flex flex-col order-2 justify-between gap-5 w-full md:order-1"
        >
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-lg font-aptos-semibold dark:text-white">
                Olá, sou a Giovana,{" "}
                <span className="gradient-text animate-gradient">
                  {"<Front-end Developer />"}
                </span>
              </p>
            </div>
            <p className="dark:text-white">
              Sou aquele tipo de pessoa que se diverte transformando linhas de
              código em interfaces incríveis. Como desenvolvedor front-end
              pleno, me especializei em React, React Native, Angular, JavaScript
              e TypeScript para criar experiências digitais que deixam os
              usuários com um sorriso no rosto.
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              {social.map(({ Icon, name }) => (
                <button
                  key={name}
                  className="flex flex-row justify-center items-end w-full md:w-fit py-1 px-2 gap-1 rounded-lg border-2 border-solid border-sky-700 font-aptos-semibold text-sky-700 hover:bg-sky-700/10 hover:border-sky-500 hover:text-sky-500 transition ease-out"
                >
                  {Icon}
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
