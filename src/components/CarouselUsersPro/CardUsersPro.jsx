import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardUsersPro = ({ user }) => {

    let result = Math.floor(user.stars / user.cantFeedBack);
    let element = "";

    for (let index = 0; index < result; index++) {
        element += "⭐";

    }

    return (
        <Card className='shadow-lg' style={{ width: '18rem' }}>
            <Card.Img alt={'img-' + user.nombre} title={'img-' + user.nombre} variant="top" src={user.urlImg} />
            <Card.Body>
                <div className='p-4 gap-4'>
                    <Card.Title className='text-center'>{user.nombre}</Card.Title>
                    <Card.Subtitle className='fw-bold'>Costo del Servicio: $ {user.costo}</Card.Subtitle>
                    <Card.Text className='fw-bold'>Calificacion: {element} </Card.Text>
                </div>
                {/* <Button variant="primary" className='w-100 fw-bold'>ver reseñas</Button> */}
            </Card.Body>
        </Card>
    )
}

export default CardUsersPro