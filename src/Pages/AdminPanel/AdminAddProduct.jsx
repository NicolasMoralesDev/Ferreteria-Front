import { useEffect, useState } from 'react';
import { addProduct, getBrand, getSubcategory } from '../../utils/fetchProductsList';
import Swal from 'sweetalert2';
import UploadWidget from '../../components/cloundinary/UploadWidget';
import { v4 as uuidv4 } from "uuid";

const AdminAddProduct = () => {

    const [productData, setProductData] = useState({
        price: 0,
        brand: "",
        subCategory: "",
        description: '',
        imageUrl: '',
        name: '',
        medida: "",
        stock: 0,
    });

    const [subCategory, setSubCategory] = useState([{}]);
    const [brand, setBrand] = useState([{}]);



    const [url, updateUrl] = useState();
    const [error, updateError] = useState();

    productData.imageUrl = url;

    const getAllSubcategoryAndBrand = async () => {

        const request = await getSubcategory();
        setSubCategory(request);

        const requestBrand = await getBrand();
        setBrand(requestBrand);

    }

    const handleInputChange = (e) => {

        productData.imageUrl = url;

        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Realiza la llamada a addProduct para enviar los datos del producto al servidor
            const addedProduct = await addProduct(productData);
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
        } finally {
            setProductData({
                price: 0,
                brand: "",
                subCategory: "",
                description: '',
                imageUrl: '',
                name: '',
                medida:"",
                stock: 0,
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
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" required placeholder="Nombre" id="floatingName" value={productData.name} name="name" onChange={handleInputChange} />
                    <label htmlFor="floatingName">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                <select
                        className="form-select"
                        required
                        id="floatingBrand"
                        name="brand"
                        onChange={handleInputChange}
                    >
                        <option value="">Selecciona una Marca</option>

                        { 
                            brand.map( i =>
                                
                            <option value={i.title} key={uuidv4()} onCanPlay={()=> handleInputBrand(i)}>{i.title}</option>
                        )
                        }
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" required placeholder="Descripcion" id="floatingDescription" value={productData.description} name='description' onChange={handleInputChange} />
                    <label htmlFor="floatingDescription">Descripcion</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" required placeholder="Medida" id="floatingMedida" value={productData.medida} name='medida' onChange={handleInputChange} />
                    <label htmlFor="floatingMedida">Medida</label>
                </div>
                <div className="form-floating mb-3">
                    <select
                        required
                        className="form-select"
                        id="floatingCategory"
                        name="subCategory"
                        onChange={handleInputChange}
                    >
                        <option value="">Selecciona una subCategoria</option>

                        {
                            subCategory.map( i =>
                            <option value={i.title} key={uuidv4()}>{i.title}</option>
                        )
                        }
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" required placeholder="Precio" id='floatingPrice' value={productData.price} name='price' onChange={handleInputChange} />
                    <label htmlFor="floatingPrice">Precio</label>
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
                    <input type="number" className="form-control" required placeholder="Stock" id='floatingStock' value={productData.stock} name='stock' onChange={handleInputChange} />
                    <label htmlFor="floatingStock">Stock</label>
                </div>

                <div className="mb-3">
                    <button type="submit" title='Agregar Producto' className="btn btn-primary">
                        Agregar Producto
                    </button>
                </div>
            </form>

        </div>
    );
};

export default AdminAddProduct;