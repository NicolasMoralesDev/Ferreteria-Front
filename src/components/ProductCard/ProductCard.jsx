/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './ProductCard.module.css'
import { Toaster } from 'react-hot-toast'

const ProductCard = ({product, handleClick}) => {
  return (
      <div className={`${styles.card}`} onClick={() => {handleClick(product)}}>
         
              <div className={styles.imgconte}>
                  <img src={product.imageUrl} className={styles.img} alt={product.name}></img>
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