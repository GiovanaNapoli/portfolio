import SocialBar from "./components/SocialBar";
import "./index.css";

function App() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex flex-col justify-center w-4/5">
        <SocialBar />
        <main className="mt-16">
          <h1 className="text-3xl font-aptos-black">Olá, sou a Giovana 👋</h1>
          <p>
            Sou desenvolvedora frontend, atualmente trabalhando na ModalGR,
            trabalhando com as tecnologias
          </p>
        </main>
        <footer className="sticky bottom-0">
          <span className="text-sm">
            © 2024 Giovana Aparecida Napoli da Silva.
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
