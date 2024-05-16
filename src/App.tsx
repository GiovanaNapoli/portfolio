import CommonLink from "./components/CommonLink";
import SocialBar from "./components/SocialBar";
import { courses } from "./constants";
import "./index.css";

function App() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex flex-col justify-center w-3/5">
        <SocialBar />
        <main className="mt-16">
          <div id="about_me" className="flex flex-row gap-5 items-start ">
            <div>
              <img
                src="./friren.jpg"
                alt="Avatar"
                className="size-28 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-5">
              <section className="flex flex-col gap-2">
                <h1 className="text-4xl font-aptos-black">
                  Olá, sou a Giovana 👋
                </h1>
                <p>
                  Sou desenvolvedora front-end pleno, atualmente trabalhando na{" "}
                  <CommonLink link="https://modalgr.io/" text="ModalGR" />.
                </p>
                <p>Anteriormente trabalhei em:</p>
                <ul className="list-disc list-inside">
                  <li>
                    Estágiaria front-end na{" "}
                    <CommonLink
                      link="https://www.otimaideia.com.br/"
                      text="Ótima Ideia"
                    />
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <section id="courses" className="flex gap-5 mt-10">
            <div className="size-28" />
            <div>
              <h2 className="text-2xl font-aptos-black">Cursos e formações</h2>
              <ul className="list-disc list-inside">
                {courses.map(({ name, link }) => (
                  <li key={name}>
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
          <section id="projects" className="flex gap-5">
            <div className="size-28" />
            <div>
              <h2 className="text-2xl font-aptos-black">Projetos</h2>
            </div>
          </section>
        </main>
        <footer className="backdrop-blur sticky bottom-0 mt-16">
          <span className="text-sm">
            © 2024 Giovana Aparecida Napoli da Silva.
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
