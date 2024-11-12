import { Link } from "react-router-dom";
import { Button } from "../components/Elements/Button";
import { CardProduct } from "../components/Fragments/CardProduct";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";

export const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between w-full flex-wrap px-5 justify-center min-h-screen items-start py-5 gap-5">
        <div className="w-3/5 flex flex-wrap gap-2">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title} id={product.id}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/3 flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};
