import { useContext, useEffect, useState } from "react"
import { getProductByQuery } from "../../utils/fetchProductsList"
import "./productList.css"
import { v4 as uuidv4 } from 'uuid'
import PaginationProduts from "./PaginationProduts/PaginationProduts";
import { PaginationContext } from "../../context/PaginationContext";
import { useCart } from "../../context/Hooks";
import {  Col, Row } from "react-bootstrap";
import { ClimbingBoxLoader } from "react-spinners"
import { useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductList = () => {

    const [searchParams] = useSearchParams();

    const { addToCart } = useCart();
    const { page, setTotal, product } = useContext(PaginationContext);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const currentPath = location.pathname;

    const [products, setProducts] = useState({});
    const moveToCart = (product) => {
        addToCart(product, 1);
    }
    const getData = async () => {

        if (currentPath == "/productos") {

            if (product) {

                console.log(product);
                setProducts(product);
                setLoading(false);

            }

        const data = await getProductByQuery(page, searchParams.get("q"));

        setProducts(data.productos);
        setTotal(data.total);
        setLoading(false);

        }
     
    }

    useEffect(() => {
        getData();
    }, [page, searchParams, product])

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
      setSelectedProduct(product);
      setShowModal(true);
    }

    const handleCloseModal = () => {
      setShowModal(false);
    }

    if (loading) return (<div style={{minHeight: "400px"}} className="d-flex justify-content-center align-items-center"><ClimbingBoxLoader color="rgba(239, 239, 239, 1)"/></div>)

    return (
        <div className=" p-5">
            <h1 className="text-center products-title p-2">PRODUCTOS</h1>
          <Row>
            {products ?
                products.map((product) => (
                    <Col xs={12} lg={12} xl={12} key={uuidv4()} >
                        <ProductCard className="card-orange" product={product}  moveToCart={moveToCart} handleClick={handleProductClick}/>
                    </ Col>
                    )
                ) :
                <h1 className="text-center">Sin productos</h1>
            }
        </Row> 
            <div className="container-fluid d-flex justify-content-center align-items-center mt-5 mb-5">
                <PaginationProduts />
            </div>
            {selectedProduct && 
            <Modal show={showModal} handleClose={handleCloseModal} title={selectedProduct.name}>
                <ProductDetail product={selectedProduct} handleCloseModal={handleCloseModal}/>
            </Modal>}

        </div>

    )
}

export default ProductList