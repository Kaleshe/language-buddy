const Input = ({ label, children, ...otherProps }) => (
  <>
    <label className="text-sm">{label}</label>
    <input
      className="mt-1 block border rounded-md px-2 py-1 border-opacity-20"
      {...otherProps}
      value="test"
    />
  </>
);

export default Input;
