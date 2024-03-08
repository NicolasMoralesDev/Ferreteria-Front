/* eslint-disable react/prop-types */
import { Suspense, useState } from 'react'
import Modal from '../Modal/Modal';
import { OrderDetail } from '../OrderDetail/OrderDetail';
import PaginationProduts from '../ProductList/PaginationProduts/PaginationProduts';
import styles from './SalesTable.module.css';
import { payMd, putStatusSale } from '../../utils/fetchSales';
import { useLocation } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useAlert } from '../../context/Hooks';
import Loading from '../Loading/Loading';
import SalesEdit from '../SalesEdit/SalesEdit';

export const SalesTable = ({ userSales }) => {

    const [showModal, setShowModal] = useState(false);
    const [showModalFeed, setShowModalFeed] = useState(false);

    const [selectedSale, setSelectedSale] = useState(null);

    const ruta = useLocation();
    const currentPath = ruta.pathname;

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

    const handleCloseModalFeed = () => setShowModalFeed(false);
    const handleOpenModalFeed = () => setShowModalFeed(true);


    const pay = async (sale) => {

        const price = sale.itemList.reduce((acc, item) => acc + item.product.price * item.amount, 0);

        const id = sale.id;
        const data = { price, id };

        await payMd(data);

    }

    const handleSelectSale = (sale, funcion) => {
        setSelectedSale(sale);
        funcion();
    }

    const handleChange = (e) => {

        userSales[e.target.id].status = e.target.value;
    }

    const changeStatus = async (index) => {


        const request = await putStatusSale(userSales[index]);

        useAlert(request, 200);

        location.reload();

    }




    return (
        <div>
            <div className="mt-4 shadow-lg">
                <Suspense fallback={<Loading />}>
                    {userSales.length > 0 ? (
                        <Table responsive className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Fecha</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                    <th>Estado</th>
                                    <th></th>
                                    <th>Editar Estado</th>
                                    <th className='text-center p-2'>Detalle</th>

                                    {currentPath == "/admin_panel" ?
                                        <></>
                                        :
                                        <>
                                        <th>Pagar</th>
                                        <th>Reseña</th>
                                        </>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {userSales.map((sale, index) => (
                                    <tr key={sale.id} className={styles.fila}>
                                        <td>{sale.id}</td>
                                        <td>{sale.date}</td>
                                        <td>{sale.address}</td>
                                        <td>{sale.phone}</td>
                                        <td className={sale.status == "CANCELADA" ? "text-danger fw-bold" : sale.status == "APROBADA" ? "text-success fw-bold" : "text-warning fw-bold"}>{sale.status}</td>
                                        <td>{
                                            currentPath === "/admin_panel" ?
                                                <>
                                                    <select name="status" onChange={handleChange} id={index}>

                                                        <option> seleccione una opcion</option>
                                                        <option value="CANCELADA">cancelar</option>
                                                        <option value="APROBADA">aprobar</option>
                                                        <option value="PENDIENTE">pendiente</option>


                                                    </select>
                                                </>
                                                :
                                                sale.status != "CANCELADA" && sale.status != "INFORMADA" && sale.status != "APROBADA" ?
                                                    <>
                                                        <select name="status" onChange={handleChange} id={index}>
                                                            <option> seleccione una opcion</option>
                                                            <option value="CANCELADA">cancelar</option>
                                                            <option value="INFORMADA">informar pago</option>
                                                        </select>
                                                    </>
                                                    :
                                                    <></>
                                        }
                                        </td>
                                        <td>
                                            {currentPath === "/admin_panel" ?
                                                <button className='btn btn-danger fw-bold' title='Cambiar estado' onClick={() => changeStatus(index)}>cambiar</button>
                                                :
                                                sale.status != "CANCELADA" && sale.status != "INFORMADA" && sale.status != "APROBADA" ?
                                                    <button className='btn btn-danger fw-bold' title='Cambiar estado' onClick={() => changeStatus(index)}>cambiar</button>
                                                    :
                                                    <button className='btn btn-danger fw-bold' disabled title='Cambiar estado'>cambiar</button>

                                            }
                                        </td>
                                        <td>
                                            <button className='btn btn-success fw-bold' onClick={() => handleSelectSale(sale, handleOpenModal)}>ver</button>
                                        </td>
                                        <td>
                                            {

                                                currentPath === "/admin_panel" ?
                                                    <></>
                                                    :
                                                    sale.status != "CANCELADA" && sale.status != "INFORMADA" && sale.status != "APROBADA" ?

                                                        <button className='btn btn-primary text-light fw-bold' onClick={() => pay(sale)}>Pagar</button> :
                                                        <button className='btn btn-primary text-light fw-bold' disabled>Pagar</button>

                                            }
                                        </td>
                                        <td>
                                        <button className='btn btn-info text-light fw-bold' onClick={()=> handleSelectSale(sale, handleOpenModalFeed)}>Dar reseña</button> 
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    ) : (
                        <p>No hay ventas para mostrar.</p>
                    )}

                </Suspense>
            </div>
            <Modal show={showModal} handleClose={handleCloseModal} title="Detalle de la compra">
                <OrderDetail sale={selectedSale} />
            </Modal>
            <Modal show={showModalFeed} handleClose={handleCloseModalFeed} title="Agregar Reseña:">
          <SalesEdit sale={selectedSale} handleClose={handleCloseModalFeed}/>
      </Modal>
            <div className='m-5 d-flex justify-content-center'><PaginationProduts /></div>
        </div>
    )
}