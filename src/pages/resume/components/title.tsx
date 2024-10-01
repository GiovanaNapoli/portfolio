type TitleProps = {
  icon: React.ReactNode;
  title: string;
};

const Title = ({ icon, title }: TitleProps) => {
  return (
    <h1 className="inline-flex items-center gap-2 text-xl font-aptos-black border-b-[1px] border-black/15 dark:border-white/15">
      {icon}
      {title}
    </h1>
  );
};

export default Title;
