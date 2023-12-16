type HeadingProps = {
  children: JSX.Element | string;
};

const Heading = ({ children }: HeadingProps) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

export default Heading;
