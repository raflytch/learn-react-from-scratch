import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Elements/Button";
import { CardProduct } from "../components/Fragments/CardProduct";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

export const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const username = useLogin();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleAddToCart = (id) => {
    const product = products.find((product) => product.id === id);
    const existingProduct = cart.find((item) => item.id === product.id);

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);

    const updatedTotalPrice = updatedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(updatedTotalPrice);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedTotalPrice = localStorage.getItem("totalPrice");

    if (storedCart && storedTotalPrice) {
      setCart(JSON.parse(storedCart));
      setTotalPrice(JSON.parse(storedTotalPrice));
    }
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 || cart.length > 0 || totalPrice > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    }
  }, [cart, totalPrice]);

  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id: id, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  return (
    <>
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
      </div>
      <div className="flex flex-col md:flex-row md:justify-between w-full flex-wrap px-5 justify-center min-h-screen items-start py-5 gap-5">
        <div className="w-3/5 flex flex-wrap gap-2">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title} id={product.id}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/3 flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          <table className="min-w-full table-auto border-separate border-spacing-2">
            <thead className="text-left bg-blue-100 text-gray-600">
              <tr>
                <th className="px-4 py-2 border-b">Product</th>
                <th className="px-4 py-2 border-b">Qty</th>
                <th className="px-4 py-2 border-b">Price</th>
                <th className="px-4 py-2 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="px-4 py-2 border-b">
                        {product.title.substring(0, 10)}
                      </td>
                      <td className="px-4 py-2 border-b">{item.quantity}</td>
                      <td className="px-4 py-2 border-b">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          currencyDisplay: "symbol",
                        }).format(product.price)}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 1,
                          currencyDisplay: "symbol",
                          useGrouping: true,
                        })
                          .format(product.price * item.quantity)
                          .replace("$", "$ ")}
                      </td>
                    </tr>
                  );
                })}
              <tr
                ref={totalPriceRef}
                className="text-left bg-blue-100 text-gray-600"
              >
                <td className="px-4 py-2 border-b" colSpan="3">
                  Total Price
                </td>
                <td className="px-4 py-2 border-b">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    currencyDisplay: "symbol",
                    useGrouping: true,
                  })
                    .format(totalPrice)
                    .replace("$", "$ ")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
