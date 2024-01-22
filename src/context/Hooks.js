import { useContext } from 'react';
import { UserContext } from './UserContext';
import { CartContext } from './CartContext';

// Custom hooks

// Hook for UserContext, returns the context value
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

// Hook for CartContext, returns the context value
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export const useProductPdf = (cart) => {
  const product = [];


  for (let index = 0; index < cart.length; index++) {
    const mock = {
      imagen: "",
      name: "",
      price: 0,
      brand: "",
      amount: 0,
      stock: 0
    };
    const element = cart[index];
    mock.imagen = element.product.imageUrl
    mock.amount = element.amount;
    mock.stock = element.product.stock;
    mock.name = element.product.name;
    mock.brand = element.product.brand;
    mock.price = "$ " + element.product.price;

    product.push(mock);


  }

  return product;
}