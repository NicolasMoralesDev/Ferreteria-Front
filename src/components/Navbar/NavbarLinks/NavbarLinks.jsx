import { Link, useLocation } from "react-router-dom";
import Offcanva from "../../OffCanvas/Offcanva";
import { useState } from "react";
import { Button } from "react-bootstrap";

const NavbarLinks = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className='navbar navbar-expand-lg text-light mt-2 navlinks-contenedor '  >
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            {
              currentPath != "/" ?
                <li className='nav-item  text-center mx-2'>
                  <Link className='nav-link mx-5 link-light fw-bold' to='/'>
                    HOME
                  </Link>
                </li>
                :
                <></>
            }
            <li className='nav-item text-center mx-2'>
              <Link className='nav-link mx-5 link-light fw-bold' to='/ayuda'>
                AYUDA
              </Link>
            </li>
            <li className='nav-item text-center mx-2'>
              <Link className='nav-link mx-5 link-light fw-bold' onClick={handleShow}>
                PRODUCTOS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Offcanva show={show} handleClose={handleClose} />
    </>
  );
};

export default NavbarLinks;
