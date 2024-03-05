import { Col, Row } from "react-bootstrap"
import CartWidget from "./CartWidget/CartWidget"
import SearchBar from "./SearchBar/SearchBar"
import UserWidget from "./UserWidget/UserWidget"
import RegisterWidget from "./UserWidget/RegisterWidget"
import NavbarLinks from "./NavbarLinks/NavbarLinks"
import logo from "./../../assets/Logocorralon.png";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { LazyLoadImage } from "react-lazy-load-image-component"

const Navbar = () => {
  return (
    <div className="container-fluid navbar-contenenedor">

      <Row className="d-flex align-items-center justify-content-around gap-3 p-3">
        <Col xs={7} sm={4} md={2} className="d-flex justify-content-center">
          <div className="container d-flex justify-content-center">
            <div className="h-50">
              <Link className='nav-link  link-light fw-bold' to='/' >
              <LazyLoadImage width={"80%"} height={"10%"} effect="blur" src={logo} loading="lazy" alt="Logo del Sitio" className="mx-auto img-fluid logo-nav p-2"/>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={7} md={4} className="container-fluid d-flex justify-content-center"> {/* Añadido el breakpoint `lg` y la clase `container-fluid` */}
          <SearchBar />
        </Col>
        <Col xs={10} md={5} className="d-flex gap-3 justify-content-center">
          <RegisterWidget/>
          <UserWidget />
          <CartWidget />
        </Col>
      </Row>
      <Row>
        <NavbarLinks />
      </Row>


    </div>
  );
}

export default Navbar