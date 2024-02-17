import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CompareContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const CompareProvider = ({ children }) => {

  const [compare, setCompare] = useState([]);

  const loadCompareFromStorage = () => {
    const compare = localStorage.getItem('productCompare');
    if (compare) {
      setCompare(JSON.parse(compare));
    } else {
      setCompare([]);
    }
  };

  /**
   * Update the compare in the localStorage.
   */
  const updateCompareStorage = () => localStorage.setItem('productCompare', JSON.stringify(compare));

  /**
   * Load the compare from the localStorage when the app starts
   */
  useEffect(() => loadCompareFromStorage(), []);

  useEffect(() => updateCompareStorage(), [compare])

  /**
   * Add a product to the compare.
   * @param {*} productToAdd Product received from the Product component. { id: 1, name: "Product 1", price: 100 }
   * @param {*} amount Amount of products to add to the cacomparet (1, 2, 3, etc)
   */
  const addToCompare = (productToAdd, amount) => {

    const itemInCompare = compare.find((item) => item.product.id === productToAdd.id);
    if (itemInCompare) {
      // If the product is already in the compare, update the amount
      updateAmount(productToAdd.id, itemInCart.amount = amount);
      toast.success('Se actualizó el producto');
    } else {
      // If the product is not in the compare, add it
      setCompare([...compare, { product: productToAdd, amount }]);
      toast.success('Se agregó el producto');
    }
    updateCompareStorage();
  };


  // Update the amount of a product in the compare
  const updateAmount = (productId, amount) => {
    setCompare(compare.map((item) => {
      if (item.product.id === productId) {
        return { ...item, amount };
      }
      return item;
    }));
    updateCompareStorage();
  };

  // Remove a product from the compare
  const removeFromCompare = (id) => {
    setCompare(compare.filter((item) => item.product.id !== id));
    toast.error('Se eliminó el producto');
    updateCompareStorage();
  };

  const getProductQuantity = (id) => { 
    const item = compare.find((i) => i.product.id === id);
    return item ? item.amount : 1;
  }


  // Delete all the products from the compare
  const clearCompare = () => {
    setCompare([]);
    updateCompareStorage();
  };

  const values = {
    compare, // representa el estado del carrito
    addToCompare, // función para agregar un producto al carrito
    removeFromCompare, // función para eliminar un producto del carrito
    updateAmount, // función para actualizar la cantidad de un producto en el carrito
    clearCompare, // función para eliminar todos los productos del carrito
    getProductQuantity, // función para obtener la cantidad de un producto en el carrito
  };

  return <CompareContext.Provider value={values}>{children}</CompareContext.Provider>;
};
