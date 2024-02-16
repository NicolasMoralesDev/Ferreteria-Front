import React from 'react'
import CreateBrand from './CreateBrand/CreateBrand'
import CreateSubCategory from './CreateSubCategory'
import { ModifyBrands, DeleteBrand } from './ModifyBrand/ModifyBrand'
import { Col, Row } from 'react-bootstrap'
import  ModifySubCategory from './ModifySubCategory/ModifySubCategory'


const BrandSubCategory = () => {
  return (
    <div className='container'>
      <Row>
        <h2 className=" text-light mt-5 p-2">SUB CATEGORIAS</h2>
        <Col xs={12} lg={12} xl={6}>
          <CreateSubCategory />
        </Col>
        {/*         <Col xs={12} lg={12} xl={6}>
          <DeleteSubCategory />
        </Col> */}
        <Col xs={12} lg={12} xl={6}>
          <ModifySubCategory />
        </Col>
      </Row>
      <hr className='text-light' />
      <Row>
        <h2 className=" text-light mt-5 p-2">MARCAS</h2>
        <Col xs={12} lg={12} xl={6}>
          <CreateBrand />
        </Col>
        <Col xs={12} lg={12} xl={6} >
          <DeleteBrand />
        </Col>
      </Row>
      <hr className='text-light fw-bold' />
      <Row>
        <Col xs={12} lg={12} xl={6} >
          <ModifyBrands />
        </Col>
      </Row>
      <hr className='text-light' />
    </div>
  )
}

export default BrandSubCategory