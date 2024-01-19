import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Modal } from 'react-bootstrap'
import { useCart } from '../../context/Hooks';
import { useState } from 'react';
import { PaginationContext } from '../../context/PaginationContext';
import { getAllProducts } from '../../utils/fetchProductsList';
import ProductCard from "../ProductCard/ProductCard";
import PaginationProduts from '../ProductList/PaginationProduts/PaginationProduts';
import "./productsHome.css"
import ProductDetail from "../ProductDetail/ProductDetail";
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ProductsHome = () => {


  const { addToCart } = useCart();
  const { page, setTotal } = useContext(PaginationContext);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([{}]);
  const moveToCart = (product) => {
    addToCart(product, 1);
  }

  const getData = async () => {

    const data = await getAllProducts(page);
    setProducts(data);
    setTotal(data.total)
    setLoading(false);
    console.log(data);
  }
  console.log(products);
  useEffect(() => {
    getData();
  }, [page])

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
    navText: ["Anterior", "Siguiente"],
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

    <main className="container">
      <h1 className="text-center m-5 products-title">ULTIMOS INGRESOS</h1>
      {products.length > 1 ?
        <ReactOwlCarousel className='owl-theme ' loop margin={11}   {...opciones}>

          {
            products.map((product) => (
              <div key={uuidv4()} className='item d-flex flex-column '>
                <ProductCard className="card-orange" product={product} moveToCart={moveToCart} handleClick={handleProductClick} />
              </ div>
            )
            )}


        </ReactOwlCarousel> :

        <h1 className="text-center">Sin productos</h1>
      }
      {selectedProduct &&
        <Modal show={showModal} handleClose={handleCloseModal} title={selectedProduct.name}>
          <ProductDetail product={selectedProduct} handleCloseModal={handleCloseModal} />
        </Modal>}
      {/*     <div className=" container-cardHome d-flex">
      {products ?
          products.map((product) => (
              <Col xs={12} lg={2} xl={2} key={uuidv4()} >
                  <ProductCard className="card-orange" product={product}  moveToCart={moveToCart} handleClick={handleProductClick}/>
              </ Col>
              )
          ) :
          <h1 className="text-center">Sin productos</h1>
      }
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5 mb-5">
          <PaginationProduts />
      </div>
      {selectedProduct && 
      <Modal show={showModal} handleClose={handleCloseModal} title={selectedProduct.name}>
          <ProductDetail product={selectedProduct} handleCloseModal={handleCloseModal}/>
      </Modal>} */}

    </main>
  )
}

export default ProductsHome