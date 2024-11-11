import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Elements/Button";
import { useLogin } from "../hooks/useLogin";

export const ProfilePage = () => {
  const username = useLogin();
  const navigate = useNavigate();

  const handleToProductPage = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Profile</h1>
            <p className="text-gray-600 mb-4">
              Selamat datang di halaman profil Anda!
            </p>
            <div className="w-full">
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-gray-600 font-medium">Username:</span>
                <span className="text-gray-800 font-semibold">{username}</span>
              </div>
              <Button
                classname="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                actionHandler={handleToProductPage}
              >
                <Link to="/products" className="text-white">
                  Kembali Ke Halaman Produk
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
