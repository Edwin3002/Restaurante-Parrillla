import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { paintPedidosAsync } from '../redux/actions/actionsPedidos'

export const Ventas = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(paintPedidosAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>AllPedidios</div>
    )
}
