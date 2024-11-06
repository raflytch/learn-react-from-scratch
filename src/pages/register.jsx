import { AuthLayout } from "../components/Layouts/AuthLayouts";
import { FormRegister } from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="mt-5 text-sm text-slate-500 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-semibold">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};
