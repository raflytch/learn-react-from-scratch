import { InputForm } from "../Elements/Input";
import { Button } from "../Elements/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const FormLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (
      localStorage.getItem("email") === null &&
      localStorage.getItem("password") === null
    ) {
      navigate("/login");
    } else {
      navigate("/products");
    }
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    navigate("/products");
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label={"Email"}
        type={"email"}
        name={"email"}
        placeholder={"example@gmail.com"}
        ref={inputRef}
      />
      <InputForm
        label={"Password"}
        type={"password"}
        name={"password"}
        placeholder={"******"}
      />
      <Button classname="bg-blue-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
