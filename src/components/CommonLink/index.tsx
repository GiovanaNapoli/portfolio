interface CommonLinkProps {
  text: string;
  link: string;
}
const CommonLink = ({ text, link }: CommonLinkProps) => {
  return (
    <a
      className="text-sky-500 hover:text-sky-600 transition-colors"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
};

export default CommonLink;
