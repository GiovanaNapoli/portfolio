type ContainerProps = {
  children: JSX.Element;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500 ease-in-out py-16 print-custom dark:text-white ">
      {children}
    </div>
  );
};

export default Container;
