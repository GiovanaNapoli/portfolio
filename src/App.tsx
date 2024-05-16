import SocialBar from "./components/SocialBar";
import "./index.css";

function App() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex flex-col justify-center w-3/5">
        <SocialBar />
        <main className="mt-16">
          <section id="about_me" className="flex flex-row gap-5 items-start ">
            <div>
              <img
                src="./friren.jpg"
                alt="Avatar"
                className="size-28 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-aptos-black">
                Olá, sou a Giovana 👋
              </h1>
              <p>
                Sou desenvolvedora front-end pleno, atualmente trabalhando na{" "}
                <a
                  className="text-sky-500 hover:text-sky-600 transition-colors"
                  href="https://modalgr.io/"
                  target="_blank"
                >
                  ModalGR
                </a>
                .
              </p>
              <p>Anteriormente trabalhei em:</p>
              <ul className="list-disc list-inside">
                <li>
                  Estágiaria front-end na{" "}
                  <a
                    className="text-sky-500 hover:text-sky-600 transition-colors"
                    href="https://www.otimaideia.com.br/"
                    target="_blank"
                  >
                    Ótima Ideia
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section id="courses"></section>
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
