import { AuthLayout } from "../components/Layouts/AuthLayouts";
import { FormRegister } from "../components/Fragments/FormRegister";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};
