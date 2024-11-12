import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  return (
    <div>
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
  );
};

export default TableCart;
