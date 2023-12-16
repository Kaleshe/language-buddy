import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

const Button = ({ children, className, href, ...otherProps }: ButtonProps) => {
  const Element = href ? "a" : "button";

  return (
    //   TODO: Clone element to prevent nesting anchor in button
    <Element
      className={clsx(
        twMerge(
          "bg-pink text-white px-12 py-2.5 inline-block rounded-full font-semibold transition-all cursor-pointer hover:opacity-75",
          className
        )
      )}
      href={href}
      {...otherProps}
    >
      {children}
    </Element>
  );
};

export default Button;
