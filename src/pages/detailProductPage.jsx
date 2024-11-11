import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      console.log(data);
      setProduct(data);
    });
  }, []);
  return (
    <>
      <div className="w-100 mih-h-screen flex justify-center items-center">
        {Object.keys(product).length > 0 && (
          <div className="flex max-w-xl">
            <div className="flex-none w-48 relative">
              <img
                src={product.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  {product.title}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 1,
                    currencyDisplay: "symbol",
                    useGrouping: true,
                  })
                    .format(product.price)
                    .replace("$", "$ ")}
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < product.rating?.rate
                          ? "text-yellow-400"
                          : "text-slate-200"
                      }
                    />
                  ))}
                  <span className="ml-3">{product.rating?.rate}</span>
                  <span className="ml-3">
                    {" "}
                    Reviews ({product.rating?.count})
                  </span>
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                  {product.category?.toUpperCase()}
                </div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4"></div>
              </div>
              <p className="text-sm text-slate-700">
                {product.description}.substring(0, 100)...
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
