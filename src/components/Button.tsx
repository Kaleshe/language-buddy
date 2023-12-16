import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

interface Props {
  className?: string;
  href?: string;
  [otherProps: string]: any;
}

const Button: React.FC<Props> = ({
  children,
  className,
  href,
  ...otherProps
}) => {
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
