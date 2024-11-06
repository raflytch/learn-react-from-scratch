export const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-bold text-slate-700"
    >
      {children}
    </label>
  );
};
