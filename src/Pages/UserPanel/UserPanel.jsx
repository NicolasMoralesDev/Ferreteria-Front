/* eslint-disable react/prop-types */
import { Button, Col, Row } from 'react-bootstrap';
import styles from './UserPanel.module.css';
import { usePrepareRequest, useSendRequest, useUser } from '../../context/Hooks';
import { useContext, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { getUserSales } from '../../utils/fetchSales';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';
import { changePasswordRequest, editUser } from '../../utils/fetchUser';
import { ClimbingBoxLoader } from "react-spinners"
import { Helmet } from 'react-helmet';
import { PaginationContext } from '../../context/PaginationContext';
import { SalesTable } from '../../components/SalesTable/SalesTable';
import Navbar from '../../components/Navbar/Navbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import EditPerfiles from '../../components/EditPerfi/EditPerfiles';

const UserPanel = () => {

  const [saleList, setSaleList] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const { page, setTotal } = useContext(PaginationContext);


  const getUserOrders = async () => {
    try {
      const response = await getUserSales(user.id, page);

      if (response.data) {
        setSaleList(response.data.sales);
        setTotal(response.data.total);
      }
    } catch (error) {
      // Puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario.
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, [user, page]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Panel de Usuario</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />

      <div className={styles.main}>

        <div className={`container ${styles.container}`}>

          {loading ? <Loading /> :
            <>
              <UserSection user={user} />
              <SalesSection saleList={saleList} />
            </>
          }
        </div>
      </div>
    </>
  );
};

const SalesSection = ({ saleList }) => {
  const navigate = useNavigate();
  return (
    <>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} lg={10} xl={8} className={styles.box}>
          <div className={styles.header}>
            <h1 className={styles.title}>Historial de compras</h1>
          </div>
          {saleList && saleList.length > 0 ? (
            <SalesTable userSales={saleList} />
          ) : (
            <>
              <p>Todavía no ha realizado compras</p>
              <Button variant="primary" onClick={() => navigate("/")}> Ir a comprar </Button>
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

const UserSection = ({ user }) => {

  return (
    <>
      <Row className='d-flex mt-5 justify-content-center align-items-center flex-wrap'>
        <div className={`d-flex flex-wrap justify-content-center ${styles.header}`}>
          <h1 className={`${styles.title}`}>Datos de usuario</h1>
        </div>
        <Col sm={12} xs={12} md={6} className={`d-flex text-center  ${styles.box}>`}>
          <div className={`${styles.box}`}>
            <LazyLoadImage effect='blur' src={user.urlImg} loading='lazy' className="p-2" alt={`image-perfil`} width="65%" />
            <div className='text-justify'>
              <h6 style={{ display: "inline-block", paddingRight: "10px", color: "black" }}>Nombre: </h6>
              <p style={{ display: "inline-block" }}>{user.firstName}</p>
            </div>
            <div>
              <h6 style={{ display: "inline-block", paddingRight: "10px", color: "black" }}>Apellido: </h6>
              <p style={{ display: "inline-block" }}>{user.lastName}</p>
            </div>
            <div>
              <h6 style={{ display: "inline-block", paddingRight: "10px", color: "black" }}>Email:</h6>
              <p style={{ display: "inline-block" }}>{user.email}</p>
            </div>
            <div>
              <h6 style={{ display: "inline-block", paddingRight: "10px", color: "black" }}>Usuario: </h6>
              <p style={{ display: "inline-block" }}>{user.role === "ROLE_PRO" ? "Profeccional" : user.role === "ROLE_ADMIN" ? "administrador" : "Comprador"}</p>
            </div>
          </div>
        </Col>
        <Col sm={10} xs={12} md={7} className={styles.box}>
          <UserButtons />
        </Col>
      </Row>

    </>
  )
}

const UserButtons = () => {
  const { user } = useUser();

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleOpenModal = () => setShowModal(true);
  const handleOpenModalEdit = () => setShowModalEdit(true);
  const [loading, setLoading] = useState(false);


  const handleSubmit = (values) => {
    const request = usePrepareRequest(user, values, true);
    useSendRequest(request, setLoading, changePasswordRequest, handleCloseModal);
  }

  const submitEdit = (values) => {
    const request = usePrepareRequest(user, values, false);
    useSendRequest(request, setLoading, editUser, handleCloseModalEdit);
  }

  return (
    <>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col xs={12} sm={12} md={12} className="d-flex gap-3 justify-content-center align-items-center">
          <Button onClick={handleOpenModal} className='fw-bold btn-success'>Cambiar contraseña</Button>
          <Button onClick={handleOpenModalEdit} className='fw-bold'>Editar Perfil</Button>
        </Col>
      </Row>
      <Modal show={showModal} handleClose={handleCloseModal} title="Cambiar contraseña">
        {loading ?
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
            <ClimbingBoxLoader color="rgba(239, 239, 239, 1)" />
          </div>
          :
          <ChangePasswordForm handleSubmit={handleSubmit} />}
      </Modal>
      <Modal show={showModalEdit} handleClose={handleCloseModalEdit} title="Editar Perfil">
        {loading ?
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
            <ClimbingBoxLoader color="rgba(239, 239, 239, 1)" />
          </div>
          :
          <EditPerfiles handleSubmit={submitEdit} user={user} />}

      </Modal>
    </>
  );
}

export default UserPanel;
