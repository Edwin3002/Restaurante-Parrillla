import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { addPedidosAsync } from '../redux/actions/actionsPedidos'
import { vaciarPedido } from '../redux/reducers/pedidosReducer'

export const PagoCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pedidosItems, cantidad, total } = useSelector((store) => store.pedidos)

  let date = new Date();
  const [cliente, setInputValue] = useState(
    {
      nombre: '',
      mesa: 0,
      hora: date.getHours() + ':' + date.getMinutes(),
      total: total,
      cantidad: cantidad,
    }
  )
  const { nombre, mesa, hora } = cliente

  const pagar = () => {
    if (nombre.length === 0 || mesa === 0 || mesa === 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Faltan datos por llenar',
        showConfirmButton: false,
        timer: 2500
      })
    } else {
      cliente.mesa = parseInt(mesa);
      let pedido = {
        pedidosItems
        ,
        cliente
      }
      dispatch(addPedidosAsync(pedido));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Pedido realizado exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      setTimeout(() => {
        dispatch(vaciarPedido());
        localStorage.setItem('cart', JSON.stringify(''));
        navigate('/');
      }, 2000);
    }
  }
  const handleChange = ({ target }) => {
    setInputValue({
      ...cliente,
      [target.name]: target.value
    })
  }
  return (
    <div className='mt-5 pt-5 m-auto w-75'>
      <h1 className='text-center fw-bold'>Realizar pedido</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" name='nombre' value={nombre} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Numero de mesa</Form.Label>
          <Form.Control max='100' min='1' type="number" placeholder="Americano 61" name='mesa' value={mesa} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Hora</Form.Label>
          <Form.Control type="text" name='hora' value={hora} disabled />
        </Form.Group>
        <Button variant="success" onClick={() => pagar()}>
          Pedir
        </Button>
      </Form>
    </div>
  )
}
