import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { getCategory } from '../../utils/fetchProductsList';

const CategoryPanel = () => {

    const [data, setData] = useState([]);

    const getData = async () => {

        const response = await getCategory();
        setData(response);
    }

    useEffect(() => {

        getData();

    }, [])

    const getAllProducts = (data)=>{
        console.log(data);
    }


    return (
        <>
            <div className="accordion accordion-flush" id="accordionFlushExample">

                <>
                    <div>
                        <h2>CATEGORIAS</h2>
                    </div>
                    {
                        data.length > 0 ?

                            data.map(i =>
                            <Fragment key={i.idCategory}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            {i.title}
                                        </button>
                                    </h2>
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
                    }
                </>
            </div>
        </>
    )
}

export default CategoryPanel