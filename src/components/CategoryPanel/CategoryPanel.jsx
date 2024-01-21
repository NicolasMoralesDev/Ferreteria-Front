import React, { useEffect } from 'react'
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

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            {i.title}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
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