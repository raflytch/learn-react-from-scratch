import { InputForm } from "../Elements/Input";
import { Button } from "../Elements/Button";

export const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-500 w-full">Login</Button>
    </form>
  );
};
