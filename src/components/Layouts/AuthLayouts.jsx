import { FormLogin } from "../Fragments/FormLogin";

export const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-6">
          Welcome back. Please enter your details.
        </p>
        {children}
      </div>
    </div>
  );
};
