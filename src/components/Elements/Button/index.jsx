export const Button = (props) => {
  const {
    children = "...",
    classname = "bg-slate-500",
    actionHandler,
    type = "button",
  } = props;
  return (
    <div>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white w-full`}
        type={type}
        onClick={actionHandler}
      >
        {children}
      </button>
    </div>
  );
};
