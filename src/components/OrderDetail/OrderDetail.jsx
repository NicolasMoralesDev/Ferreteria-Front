/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";

export const OrderDetail = ({sale}) => {
  
  const total = sale.itemList.reduce((acc, item) => acc + item.amount * item.product.price, 0);

  return (
    <div>
      <p className="text-black">
        <strong>ID de la orden:</strong> {sale.id}
      </p>
      <p className="text-black">
        <strong>Teléfono de contacto:</strong> {sale.phone}
      </p>
      <p className="text-black">
        <strong>Dirección de entrega:</strong> {sale.address}
      </p>
      <p className="text-black">
        <strong>Productos:</strong>
      </p>
      <ul>
        {sale.itemList.map((item) => (
          <li key={uuidv4()}>
            {item.product.name} - ${item.product.price} - {item.amount} unidades
          </li>
        ))}
      </ul>
      <p className="text-black">
        <strong>Total:</strong> ${total}
      </p>
    
      <p className="text-black">
        <strong>Estado:</strong> {sale.status}
      </p>  
      <p className="text-black">
        <strong>Reseña otorgada:</strong> {sale.feedback.observation}
      </p>
      <p className="text-black">
        <strong>Estrellas:</strong> {sale.feedback.stars}
      </p>
    </div>
    
  )
}
