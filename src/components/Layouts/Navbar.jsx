import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "../Elements/Button";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      setTotalCart(sum);
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const username = useLogin();
  return (
    <div>
      <div className="flex justify-end h-10 bg-blue-500 text-white items-center px-5 py-10 gap-5">
        <Link to={"/profile"}>{username}</Link>
        <Button
          className="hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
          classname="bg-red-500 hover:bg-blue-800 text-white"
          type="button"
          actionHandler={handleLogout}
        >
          Logout
        </Button>
        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-2">
          {totalCart}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
