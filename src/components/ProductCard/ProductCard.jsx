/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './ProductCard.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useCompare } from '../../context/Hooks';
import { Toaster } from 'react-hot-toast';

const ProductCard = ({product, handleClick}) => {

  const { addToCompare } = useCompare();

  return (
      <div className={`${styles.card}`} >
    
           <div className={styles.imgconte} onClick={() => {handleClick(product)}}>
                  <LazyLoadImage loading='lazy' height={150}  effect="blur" src={product.imageUrl} className={styles.img} alt={product.name}/>
                  </div>
               <div className="d-flex flex-column p-2">  
              <div className={`${styles.cardbody} w-100`} onClick={() => {handleClick(product)}}>
                      <h5 className="card-title fs-6">{product.name}</h5>
                      <p>{product.brand}</p>
                      <p className="card-text fw-bold">Precio $ {product.price}</p>
              </div>
         <button className="btn btn-success fw-bold" onClick={() => addToCompare(product)}>Comparar</button>
         </div>
      </div>

  )
}

export default ProductCard