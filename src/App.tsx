import { useState } from "react";
import CommonLink from "./components/CommonLink";
import SocialBar from "./components/SocialBar";
import { courses } from "./constants";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""} h-screen w-full`}>
      <div className="flex h-full w-full justify-center bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500 ease-in-out'">
        <div className="flex flex-col justify-center w-8/12 md:w-97/12">
          <SocialBar switchMode={() => setDarkMode((prev) => !prev)} />
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
              <div>
                <h2 className="text-2xl font-aptos-black dark:text-white">
                  Cursos e formações 🎓
                </h2>
                <ul className="list-disc list-inside">
                  {courses.map(({ name, link }) => (
                    <li key={name} className="dark:text-white">
                      {link ? (
                        <CommonLink link={link} text={name} />
                      ) : (
                        <span>{name}</span>
                      )}
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
