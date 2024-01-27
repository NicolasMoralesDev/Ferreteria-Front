import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { getCategory, getProductsFilter } from '../../utils/fetchProductsList';
import { Accordion } from 'react-bootstrap';
import { PaginationContext } from '../../context/PaginationContext';

const CategoryPanel = () => {

    const [data, setData] = useState([]);
    const { page, setTotal, setProduct } = useContext(PaginationContext);


    const getData = async () => {

        const response = await getCategory();
        setData(response);
    }

    useEffect(() => {

        getData();

    }, [])

    const getProductsByFilters = async (data) => {

        const response = await getProductsFilter(data, page);
        setTotal(response.total);
        setProduct(response.productos);

    }


    return (
        <>
            <div className="accordion accordion-flush" id="accordionFlushExample">

                <>
                    <div>
                        <h2>CATEGORIAS</h2>
                    </div>

                    <Accordion>
                        {data.length > 0 ?
                            data.map(i => (
                                <Accordion.Item eventKey={i.idCategory} key={i.idCategory}>
                                    <Accordion.Header>{i.title}</Accordion.Header>
                                    {i.subCategory.map(i =>
                                        <Accordion.Body key={i.idSubCategory} onClick={() => getProductsByFilters(i.idSubCategory)}>
                                            {i.title}
                                        </Accordion.Body>
                                    )
                                    }
                                </Accordion.Item>)
                            )
                            : <></>
                        }
                    </Accordion>
                    {/*   {
                        data.length > 0 ?

                            data.map(i =>
                            <Fragment key={i.idCategory}>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            {i.title}
                                        </button>
                                    </div>
                                    { i.subCategory.map( i =>
                                    <div id="flush-collapseOne" key={i.idSubCategory} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body" onClick={()=> getAllProducts(i.title)}>{i.title}</div>
                                    </div>
                                    )}
                                </div>
                                </Fragment>
                            )
                            :
                            <p className="text-center">Sin Datos</p>
                    } */}
                </>
            </div>
        </>
    )
}

export default CategoryPanel