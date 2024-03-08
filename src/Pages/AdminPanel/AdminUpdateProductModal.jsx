/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import UploadWidget from '../../components/cloundinary/UploadWidget';
import { getBrand, getSubcategory } from '../../utils/fetchProductsList';
import { v4 as uuidv4 } from "uuid";

const AdminUpdateProductModal = ({ product, onClose, onSave }) => {

  const [url, updateUrl] = useState();
  const [edit, setEdit] = useState(false);
  const [error, updateError] = useState();
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [subCategory, setSubCategory] = useState([{}]);
  const [brand, setBrand] = useState([{}]);


  const getAllData = async () => {

   const requestCate = await getSubcategory();
   setSubCategory(requestCate);

   const requestBrand = await getBrand();
   setBrand(requestBrand);

  }

  useEffect(() => {
    setEditedProduct({ ...product });
  }, [product]);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setEditedProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getAllData();
  }, [])
  
  const handleSave = () => {

    if (edit) {
      editedProduct.img = url;

      const updatedProduct = {
        id: editedProduct.id,
        name: editedProduct.name,
        description: editedProduct.description,
        medida: editedProduct.medida,
        price: editedProduct.price,
        subCategory: editedProduct.subCategory,
        brand: editedProduct.brand,
        imageUrl: url,
        stock: editedProduct.stock,
      };

      onSave(updatedProduct, editedProduct.id);
      onClose();
    } else {

      const updatedProduct = {
        id: editedProduct.id,
        name: editedProduct.name,
        description: editedProduct.description,
        medida: editedProduct.medida,
        price: editedProduct.price,
        subCategory: editedProduct.subCategory,
        brand: editedProduct.brand,
        imageUrl: editedProduct.imageUrl,
        stock: editedProduct.stock,
      };

      onSave(updatedProduct, editedProduct.id);
      onClose();
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

  return (
    <div className="row">
      <form>
        <div className="mb-3">
          <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
          <input type="text" className="form-control" required id="recipient-name" name="name" value={editedProduct.name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-brand" className="col-form-label">Marca:</label>
          <select
            className="form-select"
            required
            id="recipient-brand"
            name="brand"
            value={editedProduct.brand}
            onChange={handleInputChange}
          >
            <option value="" disabled>Selecciona una Marca</option>
            { brand.map( i =>
            <option value={i.title} key={uuidv4()}>{i.title}</option>
            )}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-description" className="col-form-label">Descripcion:</label>
          <input type="text" required className="form-control" id="recipient-description" name="description" value={editedProduct.description} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-medida" className="col-form-label">Medida:</label>
          <input type="text" required className="form-control" id="recipient-medida" name="medida" value={editedProduct.medida} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-category" className="col-form-label">Sub Categoría:</label>
          <select
            className="form-select"
            required
            id="recipient-category"
            name="category"
            value={editedProduct.category}
            onChange={handleInputChange}
          >
            { subCategory.map( i =>
            <option value={i.title} key={uuidv4()}>{i.title}</option>
            )}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="recipient-price" className="col-form-label">Precio:</label>
          <input type="text" className="form-control" id="recipient-price" name="price" value={editedProduct.price} onChange={handleInputChange} />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="recipient-img_url" className="col-form-label">Subir otra Imagen:</label>
          <UploadWidget onUpload={handleOnUpload}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                setEdit(true);
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
        <div className="mb-3">
          <label htmlFor="recipient-stock" className="col-form-label">Stock:</label>
          <input type="number" className="form-control" id="recipient-stock" name="stock" value={editedProduct.stock} onChange={handleInputChange} />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar Cambios</button>
      </form>
    </div>

  );
};

export default AdminUpdateProductModal;