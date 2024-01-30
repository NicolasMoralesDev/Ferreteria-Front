import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react';
import { useCart } from '../../context/Hooks';
import { useState } from 'react';
import { getAllProducts } from '../../utils/fetchProductsList';
import ProductCard from "../ProductCard/ProductCard";
import "./productsHome.css"
import ProductDetail from "../ProductDetail/ProductDetail";
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Modal from '../Modal/Modal';

const ProductsHome = () => {


  const { addToCart } = useCart();
/*   const { page, setTotal } = useContext(PaginationContext); */
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([{}]);
  const moveToCart = (product) => {
    addToCart(product, 1);
  }

  const getData = async () => {

    const data = await getAllProducts();

    setProducts(data.productos);
 /*    setTotal(data.total) */
    setLoading(false);

  }

  useEffect(() => {
    getData();
  }, [])

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {

    setSelectedProduct(product);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const opciones = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (

    <main className="container mb-5">
      <h1 className="text-center m-5 products-title">ULTIMOS INGRESOS</h1>
      {products && products.length > 1 ?
        <ReactOwlCarousel className='owl-theme' loop margin={11}   {...opciones}>

          {
            products.map((product) => (
              <div key={uuidv4()} className='item d-flex flex-column '>
                <ProductCard className="card-orange" product={product} moveToCart={moveToCart} handleClick={handleProductClick} />
              </div>
            )
            )}
        </ReactOwlCarousel>
         :
        <h2 className="text-center">Sin Productoa</h2>

      }
      {selectedProduct &&
        <Modal show={showModal} handleClose={handleCloseModal} title={selectedProduct.name}>
          <ProductDetail product={selectedProduct} handleCloseModal={handleCloseModal} />
        </Modal>}
    </main>
  )
}

export default ProductsHome