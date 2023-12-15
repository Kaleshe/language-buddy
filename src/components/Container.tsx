import clsx from "clsx";

const Container = ({ children, className }) => (
  <div className={clsx("max-w-md mx-auto py-20 px-8", className)}>
    {children}
  </div>
);

export default Container;
