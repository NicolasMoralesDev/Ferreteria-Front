import { Col, Row } from "react-bootstrap"
import CategoryPanel from "./CategoryPanel/CategoryPanel"
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"
import ProductList from "./ProductList/ProductList"
import { Helmet } from "react-helmet"

const ProductCategory = () => {


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Catalogo de Productos</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Ha ocurrido un error." />
            </Helmet>
            <Navbar />
            <main className="mt-5 mb-5 container d-flex flex-row flex-wrap">

                {/*<Col xs={12} lg={12} xl={6}>
                        <CategoryPanel />
                    </Col> 
                */}
                <ProductList />
            </main>
            <Footer />
        </>

    )
}

export default ProductCategory