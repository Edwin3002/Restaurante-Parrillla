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
  const { pedidosItems } = useSelector((store) => store.pedidos)

  const [inputValue, setInputValue] = useState(
    {
      correo: '',
      numeroCard: '',
      fecha: '',
      cvv: '',
      nombre: '',
    }
  )
  const { correo, numeroCard, fecha, cvv, nombre } = inputValue

  const pagar = () => {
    if (correo.length === 0 || numeroCard === 0 || fecha.length === 0 || cvv.length === 0 || nombre.length === 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Faltan datos por llenar',
        showConfirmButton: false,
        timer: 2500
      })
    } else {
      dispatch(addPedidosAsync({pedidosItems}))
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Pago exitoso',
        showConfirmButton: false,
        timer: 2000
      })
      setTimeout(() => {
        dispatch(vaciarPedido());
        navigate('/');
      }, 2000);
    }
  }
  const handleChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value
    })
  }
  return (
    <div className='mt-5 pt-5 m-auto w-75'>
      <h1 className='text-center fw-bold'>Pago</h1>
      <Form>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com" name='correo' value={correo} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Información de tarjeta</Form.Label>
          <Form.Control type="number" placeholder="1234 1234" name='numeroCard' value={numeroCard} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" >
          <Form.Control type="date" className='w-50' name='fecha' value={fecha} onChange={handleChange} />
          <Form.Control type="number" className='w-50' name='cvv' value={cvv} placeholder="CVV" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3 " >
          <Form.Control type="text" placeholder="Nombre del propietario " name='nombre' value={nombre} onChange={handleChange} />
        </Form.Group>
        <Button variant="success" onClick={() => pagar()}>
          Pagar
        </Button>
      </Form>
    </div>
  )
}
