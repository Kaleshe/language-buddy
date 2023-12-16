import clsx from "clsx";

type SubheadingProps = {
  children: JSX.Element | string;
  className?: string;
};

const Subheading = ({ children, className }: SubheadingProps) => (
  <h1 className={clsx(className, "text-gray font-semibold")}>{children}</h1>
);

export default Subheading;
