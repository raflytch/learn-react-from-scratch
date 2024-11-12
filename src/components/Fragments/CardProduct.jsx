import { Link } from "react-router-dom";
import { Button } from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm h-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-6 rounded-t-lg object-cover h-48 w-full"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, title, id } = props;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className="px-5 pb-5 h-full">
      <Link to={`/product/${id}`}>
        <h5 className="text-2xl font-semibold tracking-tight text-white mb-2">
          {title.substring(0, 20)}...
        </h5>
        <p className="text-s text-gray-300">{truncateText(children, 100)}</p>
      </Link>
    </div>
  );
};

const Footer = (props) => {
  const dispatch = useDispatch();
  const { price, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-semibold text-blue-400">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 1,
          currencyDisplay: "symbol",
          useGrouping: true,
        })
          .format(price)
          .replace("$", "$ ")}
      </span>
      <Button
        className="text-white px-4 py-2 rounded-md transition-colors duration-200"
        actionHandler={() => {
          dispatch(
            addToCart({
              id,
              quantity: 1,
            })
          );
        }}
        type="button"
        classname="bg-blue-500 hover:bg-blue-600 text-white"
      >
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
