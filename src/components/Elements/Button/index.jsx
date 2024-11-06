export const Button = (props) => {
  const { children = "...", classname = "bg-slate-500" } = props;
  return (
    <div>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      >
        {children}
      </button>
    </div>
  );
};
