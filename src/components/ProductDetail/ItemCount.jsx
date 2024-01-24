/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './ItemCount.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { useCart, useOnAdd } from '../../context/Hooks';

const ItemCount = ({ stock, initial, isEnabled, handleModal, product }) => {

  const [amount, setAmount] = useState(initial)
  const { addToCart } = useCart();


  const handlePlus = () => {


    if (amount < stock){
        setAmount(amount + 1);
    }
  }
  const handleMinus = () => {
    if (amount > 1){
        setAmount(amount - 1);
    }
  }

  return (
    <div className={styles.number}>
      <span className={styles.minus} onClick={handleMinus}>
        <AiOutlineMinus />
      </span>
      <span className={styles.num}>{amount}</span>
      <span className={styles.plus} onClick={handlePlus}>
        <AiOutlinePlus />
      </span>
      <Button className='fw-bold' onClick={() => useOnAdd(product, amount, handleModal, addToCart, isEnabled)}>Agregar</Button>
    
    </div>
  );
};

export default ItemCount