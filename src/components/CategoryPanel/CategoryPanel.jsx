import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { findProductsByBrand, findProductsSubCategory, getBrand, getCategory } from '../../utils/fetchProductsList';
import { Accordion, Form } from 'react-bootstrap';
import { PaginationContext } from '../../context/PaginationContext';
import { redirect, useLocation } from 'react-router-dom';
import '../../index.css'
import { useStorage } from '../../context/Hooks';

const CategoryPanel = () => {

    const [data, setData] = useState([]);
    const [brand, setBrand] = useState([]);
    const [marca, setMarca] = useState(1);

    const { page, setTotal, setProduct } = useContext(PaginationContext);

    const ruta = useLocation();
    const currentPath = ruta.pathname;

    const getData = async () => {

        const response = await getCategory();
        setData(response);

        const responseBrand = await getBrand();
        setBrand(responseBrand);
    }

    useEffect(() => {

        getData();

    }, [])

    const getProductsBySubCategory = async (data) => {

        const response = await findProductsSubCategory(data, page);
        setTotal(response.total);

        if (currentPath !== "/productos") {
            useStorage(response);  
       } else {
           localStorage.removeItem("productos");
           setProduct(response.productos);
       }
    }


    const getProductsByBrand = async () => {

        const response = await findProductsByBrand(marca, page);
        setTotal(response.total);
        

        if (currentPath !== "/productos") {
             useStorage(response);  
        } else {
            localStorage.removeItem("productos");
            setProduct(response.productos);
        }
        

    }
    
    const handleChange = (e) => {
        setMarca(e.target.value);

    }

    return (
        <>
            <div className="accordion accordion-flush" id="accordionFlushExample">

                <>
                    <div>
                            <h4 className={'text-black'}>CATEGORIAS</h4>
                    </div>

                    <Accordion>
                        {data && data.length > 0 ?
                            data.map(i => (
                                <Accordion.Item eventKey={i.idCategory} key={i.idCategory}>
                                    <Accordion.Header>{i.title}</Accordion.Header>
                                    {i.subCategory.map(i =>
                                        <Accordion.Body key={i.idSubCategory} onClick={() => getProductsBySubCategory(i.idSubCategory)}>
                                            {i.title}
                                        </Accordion.Body>
                                    )
                                    }
                                </Accordion.Item>)
                            )
                            : <></>
                        }
                    </Accordion>

                    <div className='mt-5'>
                            <h4 className={"text-black"}>MARCAS</h4>
                    </div>
                   { brand && brand.length > 0 ?
                    
                        brand.map(
                            i =>

                        <Form.Check
                        className={"text-black"}
                            key={i.title}
                            inline
                            label={i.title}
                            name={"brand"}
                            type={'radio'}
                            id={i.idBrand}
                            value={i.idBrand}
                            onChange={handleChange}
                        />)
                           :
                           <h4 className='text-center'>Sin marcas</h4>
                    }
                   
                    <div className='d-flex w-100'>
                    <button title='filtrar' className='w-100 btn btn-info mt-4 btn-orange-custom text-light border-0 fw-bold' onClick={()=> getProductsByBrand()}>Filtrar</button>
                    </div>
                </>
            </div>
        </>
    )
}

export default CategoryPanel