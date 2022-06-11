import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { PlusFill } from '../icons/icons'
import { agregarPedido } from '../redux/reducers/pedidosReducer';

export const CardsMenu = ({ value }) => {
    const dispatch = useDispatch();

    const add = (f) => {
        dispatch(agregarPedido(f))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (

        <div className='card'>
            <div className='cardContent'>
                <img className='cardImg' src={value.img} alt='food' />
            </div>
            <div className='namePlus'>
                <span className='foodName'>{value.nombre}</span>
                <span className='plus1' >
                    <span onClick={() => add(value)}>
                        <PlusFill />
                    </span>
                </span>
            </div>
        </div>
    )
}
