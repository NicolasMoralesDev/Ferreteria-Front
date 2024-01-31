/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from '../Modal/Modal';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import PaginationProduts from '../ProductList/PaginationProduts/PaginationProduts';
import styles from './SalesTable.module.css';

export const SalesTable = ({ userSales }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedSale, setSelectedSale] = useState(null);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);



    const handleSelectSale = (sale) => {
        setSelectedSale(sale);
        handleOpenModal();
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

                            </tr>
                        </thead>
                        <tbody>
                            {userSales.map((sale) => (
                                <tr key={sale.id} className={styles.fila}>
                                    <td>{sale.id}</td>
                                    <td>{sale.date}</td>
                                    <td>{sale.address}</td>
                                    <td>{sale.phone}</td>
                                    <td>{sale.status}</td>
                                    <td>{
                                        sale.status != "CANCELADA" ?
                                        <>
                                        <label  htmlFor="estado">Cambiar: </label>
                                        <select name="status" id="estado">
                                            <option value="CANCELADA">cancelar</option>
                                            <option value="INFORMADA">informar pago</option>
                                        </select>
                                        </>
                                             :
                                        <></>
                                        }
                                    </td>
                                    <td>
                                        { sale.status != "CANCELADA" ?
                                        <button className='btn btn-danger fw-bold' title='Cambiar estado'>cambiar</button>
                                        :
                                      <></>
                                        }
                                    </td>
                                    <td>
                                        <button className='btn btn-success fw-bold' onClick={() => handleSelectSale(sale)}>ver</button>
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