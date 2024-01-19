import { Helmet } from 'react-helmet'
import TableCheckout from '../../components/CartPage/TableCheckout'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'

const Cart = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>carrito</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Crear orden." />
            </Helmet>
            <Navbar/>
            <TableCheckout />
            <Footer/>
        </>

    )
}

export default Cart

