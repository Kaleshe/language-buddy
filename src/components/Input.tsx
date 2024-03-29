type InputProps = {
  label: string;
  name: string;
};

const Input = ({ label, name, ...otherProps }: InputProps) => (
  <div>
    <label htmlFor={name} className="text-sm text-gray font-semibold">
      {label}
    </label>
    <input
      className="mt-2 block w-full border rounded-xl px-4 py-2 border-gray/20 text-black/60"
      name={name}
      {...otherProps}
    />
  </div>
);

export default Input;
