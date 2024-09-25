import IconWrapper from "../IconWrapper";
import { RiMoonLine } from "react-icons/ri";

interface HeaderProps {
  switchMode(): void;
}

const Header = ({ switchMode }: HeaderProps) => {
  return (
    <IconWrapper className="fill-zinc-500 hover:fill-zinc-700 dark:fill-white dark:hover:fill-gray-400 transition-colors">
      <header className="fixed top-0 backdrop-blur inset-x-0 px-4 py-6">
        <nav className="flex flex-row justify-center items-center">
          <div className="flex flex-row items-center justify-between w-full max-w-[710px]">
            <a className="text-lg font-aptos-black dark:text-white">
              Giovana Aparecida
            </a>
            <div className="flex flex-row justify-center items-center gap-5">
              <a className="font-aptos-semibold dark:text-white cursor-pointer">
                Projetos
              </a>
              <a className="font-aptos-semibold dark:text-white cursor-pointer">
                CV
              </a>
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
