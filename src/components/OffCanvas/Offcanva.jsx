import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import CategoryPanel from '../CategoryPanel/CategoryPanel'
import { useLocation } from 'react-router-dom';

const Offcanva = ({handleClose, show}) => {

  

  return (
    <>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <CategoryPanel/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Offcanva