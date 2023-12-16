import React from "react";

interface Props {
  children: string;
}

const Heading: React.FC<Props> = ({ children }) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

export default Heading;
