import { useState } from "react";
import CommonLink from "./components/CommonLink";
import SocialBar from "./components/SocialBar";
import { courses } from "./constants";
import "./index.css";
import { CoursesStatus } from "./types";

function App() {
  const windowColorScheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(windowColorScheme);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen w-full justify-center bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500 ease-in-out'">
        <div className="flex flex-col justify-center w-8/12">
          <SocialBar switchMode={() => setDarkMode((prev) => !prev)} />
          <div className="h-16" />
          <main className="mt-16">
            <section
              id="about"
              className="flex flex-col gap-5 items-start md:flex-row "
            >
              <div>
                <img
                  src="./friren.jpg"
                  alt="Avatar"
                  className="size-28 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-aptos-black dark:text-white">
                  Olá, sou a Giovana 👋
                </h1>
                <p className="dark:text-white">
                  Sou desenvolvedora front-end pleno, atualmente trabalhando na{" "}
                  <CommonLink link="https://modalgr.io/" text="ModalGR" />.
                </p>
                <p className="dark:text-white">Anteriormente trabalhei em:</p>
                <ul className="list-disc list-inside">
                  <li className="dark:text-white">
                    Estágiaria front-end na{" "}
                    <CommonLink
                      link="https://www.otimaideia.com.br/"
                      text="Ótima Ideia"
                    />
                  </li>
                </ul>
              </div>
            </section>
            <section
              id="courses"
              className="flex flex-col md:flex-row gap-5 mt-10"
            >
              <div className="size-0 md:size-28" />
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-aptos-black dark:text-white">
                  Cursos e formações 🎓
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {courses.map(({ name, link, school, status }) => (
                    <li key={name} className="dark:text-white flex-grow">
                      <a href={link} target="_blank">
                        <div className="flex flex-col border border-zinc-300 dark:border-white rounded p-2 max-w-[300px] gap-1 shadow-sm">
                          <span className="font-aptos-semibold">{name}</span>
                          <span className="text-sm font-aptos-light">
                            {school}
                          </span>
                          <span
                            data-status={status === CoursesStatus.COMPLETED}
                            className="text-sm font-aptos-bold text-orange-400 data-[status=true]:text-green-400"
                          >
                            {status}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </main>
          <div className="flex justify-center mt-10">
            <span className="text-sm font-aptos-semibold dark:text-white">
              Ainda estou desenvolvendo esse site 🫣
            </span>
          </div>
          <footer className="flex justify-between backdrop-blur sticky bottom-0 mt-16 dark:text-white">
            <span className="text-sm">
              © 2024 Giovana Aparecida Napoli da Silva.
            </span>
            <span>🚀</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
