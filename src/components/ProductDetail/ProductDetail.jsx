import { useCart } from "../../context/Hooks";
import ItemCount from "./ItemCount";

// eslint-disable-next-line react/prop-types
const ProductDetail = ({ product = null, handleCloseModal }) => { 

  const {  getProductQuantity } = useCart();

  const initial = getProductQuantity(product.id);


  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.imageUrl} loading="lazy" className="img-thumbnail rounded-start fixed-size-image" alt={product.name}></img>
      </div>
      <div className="col-md-6">
        <p className="text-black p-3">{product.description}</p>
        <p><small className="text-body-secondary">Precio $ {product.price}</small></p>
        <ItemCount stock={product.stock} initial={initial} handleModal={handleCloseModal} product={product}/>
      </div>
    </div>
  );
} 

export default ProductDetail;