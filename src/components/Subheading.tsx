import clsx from "clsx";

const Subheading = ({ children, className }) => (
  <h1 className={clsx(className, "text-gray font-semibold")}>{children}</h1>
);

export default Subheading;
