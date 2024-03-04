/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import UploadWidget from '../cloundinary/UploadWidget';



const EditPerfiles = ({ handleSubmit, user }) => {

  const [url, updateUrl] = useState();
  const [data, setdata] = useState(user);

  function handleOnUpload(error, result, widget) {

    if (error) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);

  }

  
  const handleChange = (e) => {

    const { name, value } = e.target;
   data.urlImg = url;
    setdata((prevState) => ({ ...prevState, [name]: value })); 
    
}

data.urlImg = url;
  return (
      <BootstrapForm  onSubmit={()=> handleSubmit(data)} className="d-flex justify-content-center">
        <div className='col-8'>
          <div className='mb-3'>
            <label htmlFor='firstName'>Nombre:</label>
            <input
              required
              onChange={handleChange}
              type='text'
              name='firstName'
              value={data.firstName}
              className='form-control'
              id='firstName'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName'>Apellido:</label>
            <input
              onChange={handleChange}
              required
              type='text'
              name='lastName'
              value={data.lastName}
              className='form-control'
              id='lastName'
            />
          </div>
          { user.rol == "ROLE_PRO" ?

            <div className='mb-3'>
            <label htmlFor='costo'>Costo de Servicios:</label>
            <input
              required
              onChange={handleChange}
              value={data.costo}
              type='number'
              name='costo'
              className='form-control'
              id='costo'
            />
          </div>
          :
          <></>
          }
          <div className='mb-3'>
            <label>Foto de Perfil:</label>
            <UploadWidget onUpload={handleOnUpload} name="urlImg" id="url">
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button onClick={handleOnClick}>
                  Subir imagen
                </button>
              )
            }}
          </UploadWidget>
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email:</label>
            <input
             required
              onChange={handleChange}
              value={data.email}
              type='email'
              name='email'
              className='form-control'
              id='email'
            />
          </div>
          <Button  type='submit' className='me-2 fw-bold'>
            Guardar Cambios
          </Button>
        </div>
      </BootstrapForm>
  );
};

export default EditPerfiles;
