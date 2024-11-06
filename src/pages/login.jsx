import { Link } from "react-router-dom";
import { FormLogin } from "../components/Fragments/FormLogin";
import { AuthLayout } from "../components/Layouts/AuthLayouts";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="mt-5 text-sm text-slate-500 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 font-semibold">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};
