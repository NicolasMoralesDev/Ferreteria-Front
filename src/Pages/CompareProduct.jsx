import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useCompare } from '../context/Hooks'
import { v4 as uuidv4 } from "uuid";

const CompareProduct = () => {

    const {compare, removeFromCompare} = useCompare();

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
                <h1 className='text-center text-light mb-5 mt-5'>Comparador de productos</h1>
                <div className='container mt-5 mb-5'> <Row>
                    {compare && compare.length > 1 ?

                        compare.map((product) => (

                            <Col xs={12} lg={12} xl={3} className='d-flex gap-3 justify-content-center' key={uuidv4()}>
                                <Card style={{ width: '15rem' }} className='p-2'>
                                    <div className='w-100 text-center p-2'>
                                        <LazyLoadImage effect='blur' src={product.product.imageUrl} alt={product.product.name} style={{ maxWidth: "100px" }} />

                                        <Card.Body>
                                            
                                            <Card.Title className='text-black'>{product.name}</Card.Title>
                                            <p className='text-black'>Categoria:  <span className='fw-bold'>{product.product.subCategory}</span></p>
                                            <p className='text-black'>Marca:  <span className='fw-bold'>{product.product.brand}</span></p>
                                            <p className='text-black'>Se vende:  <span className='fw-bold'>por {product.product.medida}</span> </p>
                                            <p className='text-black'>Precio: $  <span className='fw-bold'>{product.product.price}</span></p>

                                        </Card.Body>
                                    </div>
                                    <div className='d-flex justify-content-center gap-2'>
                                        <Button variant="danger" onClick={()=> removeFromCompare(product.product.id)}>Quitar</Button>
                                        <Button variant="success">Comprar</Button>
                                    </div>

                                </Card>
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