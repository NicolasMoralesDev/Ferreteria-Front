import { Col, Row } from "react-bootstrap"
import CategoryPanel from "./CategoryPanel/CategoryPanel"
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"
import ProductList from "./ProductList/ProductList"

const ProductCategory = () => {


    return (
        <>

            <Navbar />
            <main className="mt-5 mb-5 container d-flex justify-content-center flex-wrap">
                <Row>
                    <Col xs={12} lg={12} xl={6}>
                    <CategoryPanel />
                    </Col>
                    <Col xs={12} lg={12} xl={6}>
                    <ProductList />
                    </Col>
                    
                </Row>

            </main>
            <Footer />
        </>

    )
}

export default ProductCategory