import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Menu } from '../components/Menu'
import { Navb } from '../components/Navb'
import { PagoCart } from '../components/PagoCart'
import { Carrito } from '../components/Carrito'
import { Ventas } from '../components/Ventas'
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
				<Route path='/menu' element={<Menu />} />
				<Route path='/' element={<Home />} />
				<Route path='/carrito' element={<Carrito />} />
				<Route path='/pedidos' element={<PagoCart />} />
				<Route path='/ventas' element={<Ventas />} />
			</Routes>
		</BrowserRouter>
	)
}
