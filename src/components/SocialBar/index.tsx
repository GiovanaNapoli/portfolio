import { social } from "../../constants";
import IconWrapper from "../IconWrapper";

const SocialBar = () => {
  return (
    <IconWrapper className="fill-zinc-600 hover:fill-zinc-800 transition-colors">
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
          </div>
        </nav>
      </header>
    </IconWrapper>
  );
};

export default SocialBar;
