import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardUsersPro = ({user}) => {

    return (
        <Card className='shadow-lg' style={{ width: '18rem' }}>
            <Card.Img alt={'img-'+ user.nombre} title={'img-'+ user.nombre} variant="top" src=/* {user.urlImg} */ "https://us.123rf.com/450wm/belopoppa/belopoppa1809/belopoppa180900002/109693900-imagen-de-marcador-de-posici%C3%B3n-de-perfil-silueta-gris-sin-foto-de-una-persona-en-el-avatar-la.jpg" />
            <Card.Body>
                 <Card.Title className='text-center'>{user.nombre}</Card.Title> 
                 <Card.Subtitle>Precio del Servicio: $ {user.costo}</Card.Subtitle>
                <Card.Text>

                </Card.Text>
                <Button variant="primary" className='w-100 fw-bold'>ver reseñas</Button>
            </Card.Body>
        </Card>
    )
}

export default CardUsersPro