import { social } from "../../constants";
import IconWrapper from "../IconWrapper";
import { RiLightbulbLine } from "react-icons/ri";

interface SocialBarProps {
  switchMode(): void;
}

const SocialBar = ({ switchMode }: SocialBarProps) => {
  return (
    <IconWrapper className="fill-zinc-500 hover:fill-zinc-700 dark:fill-white dark:hover:fill-gray-400 transition-colors">
      <header className="fixed top-0 backdrop-blur inset-x-0">
        <nav className="flex flex-row justify-center items-center h-16">
          <div className="flex flex-row justify-center items-center gap-5">
            {social.map(({ icon, link, name }) => (
              <a
                key={name}
                title={name}
                href={link}
                target="_blanc"
                rel="noreferrer noopener"
              >
                {icon}
              </a>
            ))}
            <button onClick={switchMode}>
              <RiLightbulbLine size={26} />
            </button>
          </div>
        </nav>
      </header>
    </IconWrapper>
  );
};

export default SocialBar;
