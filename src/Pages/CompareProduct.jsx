import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useCart, useCompare } from '../context/Hooks'
import { v4 as uuidv4 } from "uuid";
import { Toaster } from 'react-hot-toast'

const CompareProduct = () => {

    const {compare, removeFromCompare} = useCompare();
    const {addToCart} = useCart();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Comparar Productos</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Compare Productos" />
            </Helmet>
            <Navbar />
            <div>
                <h1 className='text-center products-title mb-5 mt-5'>Comparador de productos</h1>
                <div className='container mt-5 mb-5'> <Row>
                    {compare && compare.length > 0 ?

                        compare.map((product) => (

                            <Col xs={12} lg={6} xl={3} className='d-flex gap-3 justify-content-center g-5' key={uuidv4()}>
                                <Card style={{ width: '15rem' }} className='p-2 shadow-lg'>
                                    <div className='w-100 text-center p-2'>
                                        <LazyLoadImage effect='blur' src={product.product.imageUrl} alt={product.product.name} style={{ maxWidth: "100px" }} />

                                        <Card.Body>
                                            
                                            <Card.Title className='text-black'>{product.name}</Card.Title>
                                            <p className='text-black'> <span className='fw-bold'>Descripcion:</span>  {product.product.description}</p>
                                            <p className='text-black'> <span className='fw-bold'>Categoria:</span>  {product.product.subCategory}</p>
                                            <p className='text-black'> <span className='fw-bold'>Marca:</span> {product.product.brand}</p>
                                            <p className='text-black'> <span className='fw-bold'>Se vende por:</span>   {product.product.medida} </p>
                                            <p className='text-black'> <span className='fw-bold'>Precio: $</span>  {product.product.price}</p>

                                        </Card.Body>
                                    </div>
                                    <div className='d-flex justify-content-center gap-2'>
                                        <Button variant="danger" onClick={()=> removeFromCompare(product.product.id)}>Quitar</Button>
                                        <Button variant="success" onClick={()=> addToCart(product.product, 1)}>Comprar</Button>
                                    </div>

                                </Card>
                                <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
                            </Col>


                        )) : <p className='text-center textlight'>Sin Productos</p>

                    }
                </Row>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default CompareProduct