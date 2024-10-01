import { Link } from "react-router-dom";
import IconWrapper from "../iconWrapper";
import { RiMoonLine } from "react-icons/ri";

interface HeaderProps {
  switchMode(): void;
}

const Header = ({ switchMode }: HeaderProps) => {
  const routes = [
    { label: "Projetos", to: "/projects" },
    { label: "CV", to: "/resume" },
  ];

  return (
    <IconWrapper className="fill-zinc-500 hover:fill-zinc-700 dark:fill-white dark:hover:fill-gray-400 transition-colors">
      <header className="fixed top-0 backdrop-blur inset-x-0 px-4 py-6 print:hidden">
        <nav className="flex flex-row justify-center items-center">
          <div className="flex flex-row items-center justify-between w-full max-w-[710px]">
            <Link to={"/"} className="text-lg font-aptos-semibold">
              Giovana Aparecida
            </Link>
            <div className="flex flex-row justify-center items-center gap-5">
              {routes.map((route, index) => (
                <Link
                  key={index}
                  to={route.to}
                  className="font-aptos-semibold cursor-pointer"
                >
                  {route.label}
                </Link>
              ))}

              <button onClick={switchMode}>
                <RiMoonLine size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </IconWrapper>
  );
};

export default Header;
