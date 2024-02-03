/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from '../Modal/Modal';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import PaginationProduts from '../ProductList/PaginationProduts/PaginationProduts';
import styles from './SalesTable.module.css';
import { payMd, putStatusSale } from '../../utils/fetchSales';
import Swal from 'sweetalert2';

export const SalesTable = ({ userSales }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedSale, setSelectedSale] = useState(null);


    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);


   const pay = async (sale) => {
    
     const price = sale.itemList.reduce((acc, item) => acc + item.product.price * item.amount , 0);

     const id = sale.id;
     const data = { price, id};
     
     await payMd(data);   

   }

    const handleSelectSale = (sale) => {
        setSelectedSale(sale);
        handleOpenModal();
    }

    const handleChange = (e) => {
        
        userSales[e.target.id].status = e.target.value;
    }

    const changeStatus = async (index) => {


        const request = await putStatusSale(userSales[index]);

        Swal.fire({
            icon: 'success',
            title: request.msg,
            confirmButtonAriaLabel: "siguiente",
        }).then( i =>{
            location.reload();}
        );

    }

    


    return (
        <div>
            <div className="mt-4">
                {userSales.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Dirección</th>
                                <th>Teléfono</th>
                                <th>Estado</th>
                                <th></th>
                                <th>Opcion</th>
                                <th>Detalle</th>
                                <th>Pagar</th>

                            </tr>
                        </thead>
                        <tbody>
                            {userSales.map((sale, index) => (
                                <tr key={sale.id} className={styles.fila}>
                                    <td>{sale.id}</td>
                                    <td>{sale.date}</td>
                                    <td>{sale.address}</td>
                                    <td>{sale.phone}</td>
                                    <td className={ sale.status == "CANCELADA" ? "text-danger fw-bold" : sale.status == "APROBADA" ? "text-success fw-bold" : "text-warning fw-bold" }>{sale.status}</td>
                                    <td>{
                                        sale.status != "CANCELADA" && sale.status != "INFORMADA" && sale.status != "APROBADA"?
                                        <>
                                        <label  htmlFor="estado">Cambiar: </label>
                                        <select name="status" onChange={ handleChange } id={index}>
                                            <option value=""> seleccione una opcion</option>
                                            <option value="CANCELADA">cancelar</option>
                                            <option value="INFORMADA">informar pago</option>
                                        </select>
                                        </>
                                             :
                                        <></>
                                        }
                                    </td>
                                    <td>
                                        { sale.status != "CANCELADA" && sale.status != "INFORMADA" && sale.status != "APROBADA" ?
                                        <button className='btn btn-danger fw-bold' title='Cambiar estado' onClick={()=> changeStatus(index)}>cambiar</button>
                                        :
                                      <button className='btn btn-danger fw-bold' disabled title='Cambiar estado'>cambiar</button>

                                        }
                                    </td>
                                    <td>
                                        <button className='btn btn-success fw-bold' onClick={() => handleSelectSale(sale)}>ver</button>
                                    </td>
                                  <td>
                                  { sale.status != "CANCELADA" && sale.status != "INFORMADA" && sale.status != "APROBADA" ?
                                    
                                    <button className='btn btn-primary text-light fw-bold' onClick={()=> pay(sale)}>Pagar</button> :
                                    <button className='btn btn-primary text-light fw-bold' disabled>Pagar</button>

                                    }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                ) : (
                    <p>No hay ventas para mostrar.</p>
                )}


            </div>
            <Modal show={showModal} handleClose={handleCloseModal} title="Detalle de la compra">
                <OrderDetail sale={selectedSale} />
            </Modal>
            <div className='m-5 d-flex justify-content-center'><PaginationProduts /></div>
        </div>
    )
}