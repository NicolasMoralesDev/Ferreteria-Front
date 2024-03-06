import { useAlert, useUser } from "../../context/Hooks";
import '@smastrom/react-rating/style.css'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Alert, Form as BoostrappForm } from 'react-bootstrap'
import * as yup from "yup"
import { Rating, Star } from '@smastrom/react-rating'
import { useState } from "react";
import { putSale } from "../../utils/fetchSales";



export const SalesEdit = ({ sale, handleClose }) => {

    const {user} = useUser();


    const validationSchema = yup.object().shape({
        observation: yup.string().required('La reseña es requerida!'),
    });
    const [rating, setRating] = useState();

    const addFeedBack = async (data) => {

        const userAct = {id: sale.idUser, ...user};
        const datos = {feedback: {usuario: userAct, stars: rating, observation: data.observation} };
        const saleFeed = { ...sale, ...datos };

         const response = await putSale(saleFeed);
     
         useAlert(response, 200); 
         handleClose();

    }

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }


    return (
        <section className='container'>
            <div>
                <Formik
                    initialValues={{ observation: "" }}
                    validationSchema={validationSchema}
                    onSubmit={addFeedBack}
                >
                    <Form as={BoostrappForm}>

                        <div className='mb-3 d-flex flex-column justify-content-center'>
                            <label htmlFor="stars" className='text-black p-2'>Estrellas:</label>
                            <Rating isRequired style={{ maxWidth: 250 }} value={rating} onChange={setRating} itemStyles={myStyles} />
                            <ErrorMessage name="stars" component={Alert} variant="danger" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="observation" className='text-black p-2'>Escribe tu reseña:</label>
                            <Field type="text" name="observation" id="observation" className='form-control p-2' />
                            <ErrorMessage name="observation" component={Alert} variant="danger" />
                        </div>

                        <div className='d-flex gap-3 mt-2'>
                            <button type='submit' className='btn btn-danger fw-bold'>
                                Enviar
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </section>
    )
}

export default SalesEdit