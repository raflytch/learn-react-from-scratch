export const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border border-slate-200 py-2 px-2 rounded-md text-slate-700 placeholder-opacity-50 w-full"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};
