import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className='list'>
      <ListGroup >
        <h2 className='text-danger footerHead'>Contactanos</h2>
        <ListGroup.Item >
          <Button>
            <a href='https://goo.gl/maps/Ln9TmviCcGYLydQU9' target='_blanck'>Como llegar</a>
          </Button>
        </ListGroup.Item>
        <ListGroup.Item >
          <Button>
            <a href='https://chat.whatsapp.com' target='_blanck'>whatsapp</a>
          </Button>
        </ListGroup.Item>
      </ListGroup >
      <ListGroup >
        <h2 className='text-warning footerHead'>Redes Sociales</h2>
        <ListGroup.Item >
          <Button>
            <a href='https://www.facebook.com/search/top?q=parrilla%20campestre%20el%20jard%C3%ADn' target='_blanck'>Facebook</a>
          </Button>
        </ListGroup.Item>
        <ListGroup.Item >
          <Button>
            <a href='https://www.instagram.com/parrillacampestreeljardin/' target='_blanck'>Instagram</a>
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div >
  )
}
