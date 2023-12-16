import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode|string;
  className: string;
}

const Container: React.FC<Props> = ({ children, className }) => (
  <div className={clsx("max-w-md mx-auto py-20 px-8", className)}>
    {children}
  </div>
);

export default Container;
