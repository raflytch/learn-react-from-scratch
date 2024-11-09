import { Button } from "../components/Elements/Button";
import { CardProduct } from "../components/Fragments/CardProduct";

export const ProductPage = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center py-5 gap-5">
        <CardProduct>
          <CardProduct.Header image="/images/shoes.jpg" />
          <CardProduct.Body title="Sepatu New">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            harum possimus commodi! Vitae doloremque amet veniam ea.
            Repudiandae, fugit beatae facilis, ipsa iusto odit voluptas
            consequuntur necessitatibus accusantium, deserunt recusandae!
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
        <CardProduct>
          <CardProduct.Header image="/images/shoes.jpg" />
          <CardProduct.Body title="Sepatu New">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            harum possimus commodi! Vitae doloremque amet veniam ea.
            Repudiandae, fugit beatae facilis, ipsa iusto odit voluptas
            consequuntur necessitatibus accusantium, deserunt recusandae!
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
      </div>
    </>
  );
};
