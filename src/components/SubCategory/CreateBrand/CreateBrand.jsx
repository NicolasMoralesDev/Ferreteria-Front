import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from "yup"
import { Alert, Form as boostrappForm } from 'react-bootstrap'
import { postBrand } from '../../../utils/fetchProductsList'

const CreateBrand = () => {

  const validationSchema = yup.object().shape({
    title: yup.string().required('El titulo es Requerido'),
  });

  const handleSubmit = async (formData) => {

   await postBrand(formData);

  }

  return (
    <section className='container'>
      <h6 className="text-black p-2">CREAR MARCAS</h6>

      <div>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form as={boostrappForm}>

            <div className="mb-3">
              <label htmlFor="titulo" className={"text-black p-2"}>Titulo:</label>
              <Field
                type="text"
                name="title"
                placeholder="titulo"
                className="form-control p-2"
                id="title"
              />
              <ErrorMessage name="title" component={Alert} variant="danger" />
            </div>

            <div className='d-flex gap-3 mt-2'>
              <button type="submit" className="me-2 fw-bold btn btn-success">
                Crear
              </button>
            </div>


          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default CreateBrand