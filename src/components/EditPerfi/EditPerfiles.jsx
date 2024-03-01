/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Alert } from 'react-bootstrap';
import { number, object, string } from 'yup';

const validationSchema = object().shape({
  lastName: string()
    .required('El Apellido es requerido'),
  firstName: string()
    .required('El nombre es requerido'),
  urlImg: string()
    .required('La foto de perfil es requerida'),
  costo: number()
  .required('El costo es requerido'),
  email: string()
  .required('El email es requerido'),
});

const EditPerfiles = ({ handleSubmit, user }) => {
  return (
    <Formik
      initialValues={{
        urlImg: user.urlImg,
        firstName: user.firstName,
        lastName: user.lastName,
        costo: user.costo,
        email: user.email
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form as={BootstrapForm} className="d-flex justify-content-center">
        <div className='col-8'>
          <div className='mb-3'>
            <label htmlFor='firstName'>Nombre:</label>
            <Field
              type='text'
              name='firstName'
              className='form-control'
              id='firstName'
            />
            <ErrorMessage
              name='currentPassword'
              component={Alert}
              variant='danger'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName'>Apellido:</label>
            <Field
              type='text'
              name='lastName'
              className='form-control'
              id='lastName'
            />
            <ErrorMessage
              name='lastName'
              component={Alert}
              variant='danger'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='costo'>Costo de Servicios:</label>
            <Field
              type='number'
              name='costo'
              className='form-control'
              id='costo'
            />
            <ErrorMessage
              name='costo'
              component={Alert}
              variant='danger'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='urlImg'>Foto de Perfil:</label>
            <Field
              type='text'
              name='urlImg'
              className='form-control'
              id='urlImg'
            />
            <ErrorMessage
              name='urlImg'
              component={Alert}
              variant='danger'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email:</label>
            <Field
              type='email'
              name='email'
              className='form-control'
              id='email'
            />
            <ErrorMessage
              name='email'
              component={Alert}
              variant='danger'
            />
          </div>
          <Button type='submit' className='me-2 fw-bold'>
            Guardar Cambios
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditPerfiles;
