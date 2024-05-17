interface CommonLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  link: string;
}
const CommonLink = ({ text, link, className }: CommonLinkProps) => {
  return (
    <a
      className={`${className} text-sky-500 hover:text-sky-600 transition-colors`}
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
};

export default CommonLink;
