import { LazyLoadImage } from "react-lazy-load-image-component";
import { useCart, useCompare } from "../../context/Hooks";
import ItemCount from "./ItemCount";
import { Toaster } from "react-hot-toast";


// eslint-disable-next-line react/prop-types
const ProductDetail = ({ product, handleCloseModal }) => {

  const { getProductQuantity } = useCart();
  const { addToCompare } = useCompare();


  const initial = getProductQuantity(product.id);


  return (
    <div className="row w-100">
      <div className="col-md-6">
        <LazyLoadImage effect="blur" src={product.imageUrl} loading="lazy" className="img-thumbnail rounded-start fixed-size-image" alt={product.name}></LazyLoadImage>
      </div>
      <div className="col-md-6">
        <p className="text-black p-3">{product.description}</p>
        <p><small className="text-body-secondary">Precio $ {product.price}</small></p>
        <div className="d-flex gap-2 flex-column">
          <ItemCount stock={product.stock} initial={initial} handleModal={handleCloseModal} product={product} />
          <button className="btn btn-success fw-bold w-50 align-self-start" onClick={() => addToCompare(product)}>Comparar</button>

        </div>
      </div>          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
    </div>
  );
}

export default ProductDetail;