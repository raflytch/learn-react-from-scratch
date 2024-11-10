import { Button } from "../Elements/Button";

export const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm h-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt="product"
        className="p-6 rounded-t-lg object-cover h-48 w-full"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-2xl font-semibold tracking-tight text-white mb-2">
          {title}
        </h5>
        <p className="text-s text-gray-300">{truncateText(children, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-semibold text-blue-400">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(price)}
      </span>
      <Button
        className="text-white px-4 py-2 rounded-md transition-colors duration-200"
        actionHandler={() => {
          handleAddToCart(id);
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
