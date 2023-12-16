import clsx from "clsx";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={clsx("max-w-md mx-auto py-20 px-8", className)}>
    {children}
  </div>
);

export default Container;
