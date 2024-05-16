import { RiTwitterLine, RiGithubLine, RiLinkedinFill } from "react-icons/ri";
import IconWrapper from "../IconWrapper";

const social = [
  {
    icon: <RiLinkedinFill size={26} />,
    link: "https://www.linkedin.com/in/giovana-aparecida-napoli-da-silva/",
    name: "Linkedin",
  },
  {
    icon: <RiGithubLine size={26} />,
    link: "https://github.com/GiovanaNapoli",
    name: "Github",
  },
  {
    icon: <RiTwitterLine size={26} />,
    link: "https://twitter.com/Genova_Trakinas",
    name: "Twitter",
  },
];

const SocialBar = () => {
  return (
    <IconWrapper className="fill-zinc-600 hover:fill-zinc-800 transition-colors">
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
    </IconWrapper>
  );
};

export default SocialBar;
