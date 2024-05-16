import { IconContext } from "react-icons";

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

const IconWrapper = ({ children, className }: IconWrapperProps) => {
  return (
    <IconContext.Provider value={{ className }}>
      {children}
    </IconContext.Provider>
  );
};

export default IconWrapper;
