import { courses, social as socials } from "../../constants";
import { PiMapPinAreaBold } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import Item from "./components/item";
import Title from "./components/title";

const Resume = () => {
  const social = socials(0);

  const downloadPdf = () => {
    window.print();
  };

  return (
    <div className="flex flex-col w-full mt-16 max-w-3xl">
      <main className="flex flex-col gap-3 px-7">
        <div
          onClick={downloadPdf}
          className="flex flex-row bg-sky-500/10 rounded-md p-4 font-aptos-light cursor-pointer print:hidden"
        >
          🖨️ Baixe essa página como PDF
        </div>
        <section>
          <div className="flex flex-row flex-wrap gap-2 justify-between">
            <h1 className="text-xl font-aptos-black">Giovana Aparecida</h1>
            <div className="flex flex-row gap-2">
              {social.map((s, index) => (
                <a
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sky-500 font-bold"
                  key={index}
                  href={s.link}
                >
                  {s.Icon}
                  {s.name}
                </a>
              ))}
              <p className="inline-flex items-center gap-2">
                <PiMapPinAreaBold /> São Paulo, Brasil
              </p>
            </div>
          </div>
          <p>
            Sou desenvolvedora front-end pleno, especializada em Javascript e
            Typescript, tenho interesse no desenvolvimento de soluções web e
            mobile atráves dos frameworks: React, React Native e Angular.
          </p>
        </section>
        <section className="flex flex-col gap-6">
          <Title
            icon={<MdWork size={24} />}
            title="Experiencias profissionais"
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <h1 className="text-lg font-aptos-bold">ModalGR</h1>
              <span>2020 - 2024</span>
            </div>
            <p>
              Como Desenvolvedor Frontend Pleno com experiência em diversas
              tecnologias, incluindo React Native, Angular, tenho um histórico
              consistente em construir e manter aplicações web escaláveis e
              performáticas. Ao longo de minha carreira, trabalhei em diversos
              projetos, desde o desenvolvimento de aplicações para o setor agro
              até a manutenção de plataformas bancárias.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <h1 className="text-lg font-aptos-bold">Ótima Ideia</h1>
              <span>2020 - 2020</span>
            </div>
            <p>
              Como estágiaria, fiquei responsável pela manutenção e
              desenvolvimento de sites e landing pages com Wordpress. Também
              atuei no desenvolvimento de um aplicativo com React Native para
              uma empresa privada de metrô.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <Title icon={<RiGraduationCapFill size={24} />} title="Educação" />
          <Item
            foundation="Universidade Santa Cecilía"
            name="Análise e Desenvolvimento de Sistemas"
            date="2024 - 2026"
          />
          <Item
            foundation="Etec Adolpho Berezin"
            name="Informática"
            date="2016 - 2017"
          />
        </section>
        <section className="flex flex-col gap-6">
          <Title icon={<RiGraduationCapFill size={24} />} title="Cursos" />
          <div className="flex flex-col gap-3">
            {courses.map((course, index) => (
              <Item
                key={index}
                foundation={course.foundation}
                name={course.name}
                date={course.date}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
