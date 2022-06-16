import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../style/pedidos.css'
import { Minus, Plus, XFill } from '../icons/icons'
import { aumentarPedido, disminuirPedido, removerPedido, vaciarPedido } from '../redux/reducers/pedidosReducer'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export const Pedidos = () => {
  const dispatch = useDispatch();
  const { pedidosItems, cantidad, total } = useSelector((store) => store.pedidos)

  const plus = (id) => {
    dispatch(aumentarPedido({ id }));
  }
  const minus = (id, cant) => {
    if (cant === 1) {
      dispatch(removerPedido(id));
    }else{
      dispatch(disminuirPedido({ id }));
    }
  }
  const cancelar = () => {
    dispatch(vaciarPedido())
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Pedido Cancelado',
      showConfirmButton: false,
      timer: 1500
    });
    localStorage.setItem('cart', JSON.stringify(''));
  }
  const remover = (id) => {
    dispatch(removerPedido(id))
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Producto Removido',
      showConfirmButton: false,
      timer: 1500
    });
  }
  if (cantidad < 1) {
    return (
      <div className='cartEmpty'>
        <div className='contEmpty'>
          <div>
            <h2 className='text-black fw-bold text-center'>Carrito Vacio</h2>
            <div>
              <img src='https://res.cloudinary.com/edwin3002/image/upload/v1654913961/restaurant/pedido-online_ihoieh.png' alt='celFood' />
            </div>
            <Link to='/menu'>
              <button className='btnMenu'>Ver Menu</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='contPedidos pt-5 '>
      <h2 className='m-auto text-center fw-bold'>Carrito de pedidos</h2>
      <hr />
      {
        pedidosItems.map((food) => {
          const { id, nombre, descripcion, precio, img, cantidad } = food
          return (
            <div className='cardCart' key={id}>
              <div className='son1'>
                <p className='namePedidoCart'>{nombre}</p>
                <p className='descrip'>{descripcion}</p>
                <div className='subT-count'>
                  <div>
                    <span className='minus' >
                      <span onClick={() => minus(id, cantidad)}>
                        <Minus />
                      </span>
                    </span>
                    <span>{cantidad}</span>
                    <span className='plus' >
                      <span onClick={() => plus(id)}>
                        <Plus />
                      </span>
                    </span>
                  </div>
                  <div>
                    <strong>SubTotal: </strong> {Intl.NumberFormat('de-DE').format(precio)}
                  </div>
                </div>
              </div>
              <div className='son2'>
                <p className='delete' onClick={() => remover(id)}><XFill /></p>
                <img className='imgCart' src={img} alt='food' />
              </div>
            </div>
          )
        })}
      <div className='btnCancel'>
        <Button variant='danger' className='my-2' onClick={() => { cancelar() }}>Cancelar</Button>
      </div>
      <div className='footCart'>
        <div>
          <strong>Total: </strong> {Intl.NumberFormat('de-DE').format(total)}
        </div>
        <div>
          <Link to='/pago'>
            <button className='btnPago '>Realizar pedido</button>
          </Link>
        </div>
      </div>
    </div >

  )
}
