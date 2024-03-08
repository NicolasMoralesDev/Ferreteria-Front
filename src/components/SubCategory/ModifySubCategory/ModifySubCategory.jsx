import React, { useEffect } from 'react'
import { getSubcategory, modifyTitleSub } from '../../../utils/fetchProductsList';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';

/*export const DeleteSubCategory = () => {

  const validationSchema = yup.object().shape({
    id: yup.number().required('La SubCategoria es requerida!'),
  });

  const [subCategory, setSubCategory] = useState([{}]);

  const getSubCate = async () => {

    const request = await getSubcategory();
    setSubCategory(request);

  }


  const deleteBrand = async (id) => {

    const response = await deleteSubCategoria(id);

    useAlert(response, 200);

  }


  useEffect(() => {

    getSubCate();

  }, [deleteBrands, modifyTitle]);

  return (
    <section className='container'>
      <h6 className='text-light p-2'>ELIMINAR SUBCATEGORIA</h6>

      <div>
        <Formik
          initialValues={{ id: 0 }}
          validationSchema={validationSchema}
          onSubmit={deleteBrand}
        >
          <Form as={BoostrappForm}>

            <div className='mb-3'>
              <label htmlFor="id" className='text-light p-2'> Seleccione una Sub Categoria</label>
              <Field name="id" id="id" as={"select"} className='form-control p-2' multiple={false}>

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

*/


const ModifySubCategory = () => {

  const [subCate, setSubCate] = useState([{}]);
  const [titulo, setTitulo] = useState("");
  const [sub, setSub] = useState(0);



  const modifyName = async () => {

      const subNew = [];
      subNew.push(subCate[sub]);
      subNew[0].title = titulo;

      await modifyTitleSub(subNew);

  }

  const getSubCategory = async () => {

      const request = await getSubcategory();
      setSubCate(request);

  }

  useEffect(() => {

    getSubCategory();

  }, []);


  return (
      <section className='container mt-3'>
          <h6 className='text-black p-2'>CAMBIAR TITULO</h6>
          
          <div>
                  <div className='d-flex flex-column gap-3'>
                      <label htmlFor="title" className='text-black'> Ingrese el nuevo Titulo</label>
                      <input name="title" id="title" required className='p-2' type="text" placeholder="nuevo titulo..." onChange={(e)=> setTitulo(e.target.value) }/>
                  </div>
                  <div className='d-flex flex-column gap-3'>
                      <label htmlFor="subCate" className='text-black'> Seleccione una Sub Categoria</label>
                      <select name="subCate" id="subCate"  className='p-2'  onChange={(e)=> setSub(e.target.value)}>

                          {subCate.map((i, index) =>
                              <option value={index} id='subCate' key={uuidv4()} >{i.title}</option>
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

export default ModifySubCategory
