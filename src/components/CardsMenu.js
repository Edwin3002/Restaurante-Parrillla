
import { useDispatch } from 'react-redux';
import { addItemCart } from '../helpers/cartLocalStorage';
import { PlusFill } from '../icons/icons'
import { agregarPedido } from '../redux/reducers/pedidosReducer';

export const CardsMenu = ({ value }) => {
    const dispatch = useDispatch();

    const add = (item) => {
        dispatch(agregarPedido(item));
        addItemCart(item);
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
