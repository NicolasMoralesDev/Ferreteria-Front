import { useEffect, useState } from 'react';
import { addProduct, getBrand, getSubcategory } from '../../utils/fetchProductsList';
import Swal from 'sweetalert2';
import UploadWidget from '../../components/cloundinary/UploadWidget';
import { v4 as uuidv4 } from "uuid";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Alert, Form as BoostrappForm } from 'react-bootstrap'
import * as yup from "yup"

const AdminAddProduct = () => {

    const validationSchema = yup.object().shape({
        name: yup.string().required("El Nombre es obligatorio!"),
        brand: yup.string().required('La Marca es requerida!'),
        description: yup.string().required("La descripcion es obligatoria!"),
        medida: yup.string().required("La medida es obligatoria!"),
        price: yup.number().required("El precio es obligatorio!"),
        stock: yup.number().required("El stock es obligatorio!"),
    });


    const [subCategory, setSubCategory] = useState([{}]);
    const [brand, setBrand] = useState([{}]);

    const [url, updateUrl] = useState();
    const [error, updateError] = useState();



    const getAllSubcategoryAndBrand = async () => {

        const request = await getSubcategory();
        setSubCategory(request);

        const requestBrand = await getBrand();
        setBrand(requestBrand);

    }


    const handleSubmit = async (value) => {
        value.imageUrl = url;
        try {
            // Realiza la llamada a addProduct para enviar los datos del producto al servidor
            const addedProduct = await addProduct(value);
            Swal.fire({
                title: 'Producto agregado',
                text: `${addedProduct}`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });


        } catch (e) {
            Swal.fire({
                title: 'Error',
                text: 'No se pudo agregar el producto',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    /**
     * handleOnUpload
     */

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


    useEffect(() => {


        getAllSubcategoryAndBrand();

    }, [])

    return (
        <div className='container mt-3 mb-5'>
            <h2 className='mt-3 mb-3'>Agregar Producto</h2>
            <p className='text-center'>{error}</p>
            <Formik
                initialValues={{ name: "", brand: "", description: "", stock: 1, subCategory: "", medida: "", price: 0 }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form as={BoostrappForm}>
                    <div className="form-floating mb-3">

                        <Field type="text" className="form-control" placeholder="Nombre" id="floatingName" name="name" />
                        <label htmlFor="floatingName">Nombre</label>
                        <ErrorMessage name="name" component={Alert} variant="danger" />
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            as={"select"}
                            className="form-select"
                            required
                            id="floatingBrand"
                            name="brand"
                        >
                            {
                                brand.map(i =>

                                    <option value={i.title} key={uuidv4()} onChange={() => handleInputBrand(i)}>{i.title}</option>
                                )
                            }
                            <ErrorMessage name="brand" component={Alert} variant="danger" />
                        </Field>
                    </div>
                    <div className="form-floating mb-3">
                        <Field type="text" className="form-control" placeholder="Descripcion" id="floatingDescription" name='description' />
                        <label htmlFor="floatingDescription">Descripcion</label>
                        <ErrorMessage name="description" component={Alert} variant="danger" />
                    </div>
                    <div className="form-floating mb-3">
                        <Field type="text" className="form-control" placeholder="Medida" id="floatingMedida" name='medida' />
                        <label htmlFor="floatingMedida">Medida</label>
                        <ErrorMessage name="medida" component={Alert} variant="danger" />
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            as={"select"}
                            required
                            className="form-select"
                            id="floatingCategory"
                            name="subCategory"
                        >

                            {
                                subCategory.map(i =>
                                    <option value={i.title} key={uuidv4()}>{i.title}</option>
                                )
                            }
                        </Field>
                        <ErrorMessage name="subCategory" component={Alert} variant="danger" />
                    </div>
                    <div className="form-floating mb-3">
                        <Field type="text" className="form-control" placeholder="Precio" id='floatingPrice' name='price' />
                        <label htmlFor="floatingPrice">Precio</label>
                        <ErrorMessage name="price" component={Alert} variant="danger" />
                    </div>
                    <div className="form-floating mb-3">

                        <UploadWidget onUpload={handleOnUpload}>
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

                    <div className="form-floating mb-3">
                        <Field type="number" className="form-control" required placeholder="Stock" id='floatingStock' name='stock' />
                        <label htmlFor="floatingStock">Stock</label>
                        <ErrorMessage name="stock" component={Alert} variant="danger" />
                    </div>

                    <div className="mb-3">
                        <button type="submit" title='Agregar Producto' className="btn btn-primary">
                            Agregar Producto
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default AdminAddProduct;