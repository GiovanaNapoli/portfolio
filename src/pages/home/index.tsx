import { social as socials } from "../../constants";
const Home = () => {
  const social = socials();

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-col w-full max-w-3xl">
      <main className="grid grid-flow-row mt-16 px-7 gap-2 md:grid-flow-col">
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
              <p className="text-lg font-aptos-semibold">
                Olá, sou a Giovana,{" "}
                <span className="font-aptos-black gradient-text animate-gradient">
                  {"<Front-end Developer />"}
                </span>
              </p>
            </div>
            <p>
              Sou aquele tipo de pessoa que se diverte transformando linhas de
              código em interfaces incríveis. Como desenvolvedora front-end
              pleno, me especializei em React, React Native, Angular, JavaScript
              e TypeScript para criar experiências digitais que deixam os
              usuários com um sorriso no rosto.
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              {social.map(({ Icon, name, link }) => (
                <button
                  key={name}
                  onClick={() => handleOpenLink(link)}
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
