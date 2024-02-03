/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './ProductCard.module.css'
import { Toaster } from 'react-hot-toast'
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({product, handleClick}) => {

  return (
      <div className={`${styles.card}`} onClick={() => {handleClick(product)}}>
         
              <div className={styles.imgconte}>
                  <LazyLoadImage loading='lazy' height={150}  effect="blur" src={product.imageUrl} className={styles.img} alt={product.name}/>
                  </div>
            
              <div className={styles.cardbody}>
                      <h5 className="card-title">{product.name}</h5>
                      <p>{product.brand}</p>
                      <p className="card-text fw-bold">Precio $ {product.price}</p>
                      <Toaster
                          position="bottom-right"
                          reverseOrder={false}
                      />
              </div>

      </div>

  )
}

export default ProductCard