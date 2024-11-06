import { InputForm } from "../Elements/Input";
import { Button } from "../Elements/Button";

export const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label={"Fullname"}
        type={"text"}
        name={"fullname"}
        placeholder={"insert your name here"}
      />
      <InputForm
        label={"Email"}
        type={"email"}
        name={"email"}
        placeholder={"example@gmail.com"}
      />
      <InputForm
        label={"Password"}
        type={"password"}
        name={"password"}
        placeholder={"******"}
      />
      <InputForm
        label={"Confirm Password"}
        type={"password"}
        name={"confirmpassword"}
        placeholder={"******"}
      />
      <Button classname="bg-blue-500 w-full">Register</Button>
    </form>
  );
};
