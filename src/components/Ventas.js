import React, { useEffect, useState } from 'react'
import { Accordion, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { paintPedidosAsync } from '../redux/actions/actionsPedidos'
import '../style/ventas.css'
import clock from '../icons/clock1.png';
import table from '../icons/table.png';
export const Ventas = () => {
    const dispatch = useDispatch();
    const [sales, setSales] = useState([]);

    const getDataVenta = async () => {
        setSales(await dispatch(paintPedidosAsync()));
        // sales.map((venta)=>{
        //     console.log(venta.cliente);
        //     console.log(venta.pedidosItems);
        // })
    }
    useEffect(() => {
        getDataVenta();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (sales === '') {
        return (

            <div>hola</div>
        )
    }

    return (
        <div className='father'>
            <h2 className='m-auto text-center fw-bold'>Ventas</h2>
            <Accordion >
                {
                    sales.slice(0, 10).map((venta, index) => (
                        <Accordion.Item key={index} eventKey={index}>
                            <div className='d-flex'>
                                <Accordion.Header className='accorH '>
                                    <div className='accorH1'>
                                        {venta.cliente.nombre}
                                    </div>
                                    <div>
                                        <img src={clock} alt='clock'/>
                                        {venta.cliente.hora}
                                    </div>
                                    <div>
                                    <img src={table} alt='table'/>
                                        {venta.cliente.mesa}
                                    </div>
                                    <div>
                                        ${Intl.NumberFormat('de-DE').format(venta.cliente.total)}
                                    </div>
                                </Accordion.Header>
                                <div className='check-btn'>
                                    <Form >
                                        <Form.Check  type="checkbox" />
                                    </Form>
                                </div>
                            </div>
                            <Accordion.Body>
                                {venta.pedidosItems.map((item, index) => (
                                    <div className='bodyAccor' key={index}>
                                        <div className='accor1'>
                                            {item.nombre}
                                        </div>
                                        <div className='cardContentSales'>
                                            <img className='cardImgSales' width='50px' src={item.img} alt={item.nombre} />
                                        </div>
                                        <div>
                                            cant: {item.cantidad}
                                        </div>
                                        <div>
                                            {Intl.NumberFormat('de-DE').format(item.precio)}
                                        </div>
                                    </div>
                                ))
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </div>
    )
}
