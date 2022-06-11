import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Menu } from '../components/Menu'
import { Navb } from '../components/Navb'
import { PagoCart } from '../components/PagoCart'
import { Pedidos } from '../components/Pedidos'
import { totalPedido } from '../redux/reducers/pedidosReducer'

export function AppRoutes() {
	const { pedidosItems } = useSelector((store) => store.pedidos)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(totalPedido());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pedidosItems]);
	return (
		<BrowserRouter>
			<Navb />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/pedidos' element={<Pedidos />} />
				<Route path='/pago' element={<PagoCart />} />
			</Routes>
		</BrowserRouter>
	)
}
