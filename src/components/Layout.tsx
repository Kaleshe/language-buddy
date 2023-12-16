import React from "react";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => <div>{children}</div>;

export default Layout;
