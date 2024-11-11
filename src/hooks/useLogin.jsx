import { useNavigate } from "react-router-dom";
import { getUsername } from "../services/auth.service";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      navigate("/login");
    }
    setUsername(getUsername(token));
  }, []);

  return username;
};
