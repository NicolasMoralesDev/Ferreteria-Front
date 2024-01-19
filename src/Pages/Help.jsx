import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";


const Help = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ayuda</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Realizar un pedido
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Te registras o inicias sesion y solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, seleccionas <strong>Terminar Compra</strong> para redirigirte al Checkout. Luego hacés clic en el botón <strong>Crear Orden</strong> y completas con tu direccion para el envio y tu numero de telefono.
                                    Por último, clickeas en generar ticket para luego pagar con Mercadopago o seguir comprando.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Precio
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse text-black" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Mercadopago
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"> Pagas realizando una transferencia desde tu cuenta de MercadoPago.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4  text-black">
                    <h2>Corralon Online te ayuda, ¿Cuál es tu consulta?</h2>
                    <ul>
                        <li>
                        <p><strong>Contactanos:</strong></p>

                        </li>
                        <li>
                        <p className="link-nav">Email: <a href="mailto:infotecno@tecnocompro.com">infocorralon@corralon.com</a></p>

                        </li>
                        <li>
                          <p>WhatsApp: +54 - 011 - 1234565</p>  
                        </li>
                    </ul>
                    
                </div>


            </div>
            <Footer />
        </>
    );
};



export default Help;