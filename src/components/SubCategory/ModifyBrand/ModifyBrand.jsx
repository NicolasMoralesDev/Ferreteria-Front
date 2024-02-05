import React, { useEffect, useState } from 'react'
import { deleteBrands, getBrand, modifyTitle } from '../../../utils/fetchProductsList'
import { v4 as uuidv4 } from "uuid";
import { useAlert } from '../../../context/Hooks';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Alert, Form as BoostrappForm } from 'react-bootstrap'
import * as yup from "yup"

export const DeleteBrand = () => {

    const validationSchema = yup.object().shape({
        id: yup.number().required('La Marca es requerida!'),
    });

    const [brand, setBrand] = useState([{}]);

    const getBrands = async () => {

        const request = await getBrand();
        setBrand(request);

    }


    const deleteBrand = async (id) => {

        const response = await deleteBrands(id);

        useAlert(response, 200);

    }


    useEffect(() => {

        getBrands();

    }, [deleteBrands, modifyTitle]);

    return (
        <section className='container'>
            <h6 className='text-light p-2'>ELIMINAR MARCA</h6>

            <div>
                <Formik
                    initialValues={{ id: 0 }}
                    validationSchema={validationSchema}
                    onSubmit={deleteBrand}
                >
                    <Form as={BoostrappForm}>

                        <div className='mb-3'>
                            <label htmlFor="id" className='text-light p-2'> Seleccione una Marca</label>
                            <Field name="id" id="id" as={"select"} className='form-control p-2'  multiple={true}>

                                {brand.map(i =>
                                    <option value={i.idBrand} id='id' key={uuidv4()}>{i.title}</option>
                                )

                                }
                            </Field>
                        <ErrorMessage name="id" component={Alert} variant="danger" />
                        </div>

                        <div className='d-flex gap-3 mt-2'>

                            <button type='submit' className='btn btn-danger fw-bold' onClick={() => deleteBrand()}>
                                Eliminar
                                </button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </section>
    )
}



export const ModifyBrands = () => {

    const [brand, setBrand] = useState([{}]);
    const [titulo, setTitulo] = useState("");
    const [marca, setMarca] = useState(0);



    const modifyName = async () => {

        const brandNew = [];
        brandNew.push(brand[marca]);
        brandNew[0].title = titulo;

        const response = await modifyTitle(brandNew);
        useAlert(response, 200); 

    }

    const getBrands = async () => {

        const request = await getBrand();
        setBrand(request);

    }


    useEffect(() => {

        getBrands();

    }, [deleteBrands, modifyTitle]);

    return (
        <section className='container mt-3'>
            <h6 className='text-light p-2'>CAMBIAR TITULO</h6>
            
            <div>
                    <div className='d-flex flex-column gap-3'>
                        <label htmlFor="title" className='text-light'> Ingrese el nuevo Titulo</label>
                        <input name="title" id="title" required className='p-2' type="text" placeholder="nuevo titulo..." onChange={(e)=> setTitulo(e.target.value) }/>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <label htmlFor="brand" className='text-light'> Seleccione una Marca</label>
                        <select name="brand" id="brand"  className='p-2' required  multiple={false} onChange={(e)=> setMarca(e.target.value)}>
                           <option value="" >Seleccione una marca...</option>

                            {brand.map((i, index) =>
                                <option value={index} id='brand' key={uuidv4()} >{i.title}</option>
                            )

                            }
                        </select>

                    </div>            
                    <div className='d-flex gap-3 mt-3 '>

                        <button  className=' me-2 btn btn-success fw-bold' onClick={()=> modifyName()}>Modificar Nombre</button>
                    </div>
            </div>
        </section>
    )
}

