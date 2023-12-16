import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode|string;
  className: string;
}

const Subheading: React.FC<Props> = ({ children, className }) => (
  <h1 className={clsx(className, "text-gray font-semibold")}>{children}</h1>
);

export default Subheading;
