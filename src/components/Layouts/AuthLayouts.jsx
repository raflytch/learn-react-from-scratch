import { Link } from "react-router-dom";

export const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-6">
          Welcome back. Please enter your details.
        </p>
        {children}
        <p className="mt-5 text-sm text-slate-500 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="text-blue-500 font-semibold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};
