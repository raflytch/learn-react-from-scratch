import { InputForm } from "../Elements/Input";
import { Button } from "../Elements/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Login } from "../../services/auth.service";

export const FormLogin = () => {
  const navigate = useNavigate();

  const [failedLogin, setFailedLogin] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // if (
    //   localStorage.getItem("email") === null &&
    //   localStorage.getItem("password") === null
    // ) {
    //   navigate("/login");
    // } else {
    //   navigate("/products");
    // }
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // navigate("/products");
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    Login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        navigate("/products");
      } else {
        console.log(res.response.data);
        navigate("/login");
        setFailedLogin(res.response.data);
      }
    });
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label={"Username"}
        type={"text"}
        name={"username"}
        placeholder={"raflytch"}
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
      {failedLogin && (
        <p className="text-red-500 text-center mt-2">{failedLogin}</p>
      )}
    </form>
  );
};
