import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { menu } from "../../data/menu";
import { changeItemCartPlus } from "../../helpers/cartLocalStorage";
const initialState = {
    pedidosItems: [],
    // pedidosItems: menu.slice(0, 4),
    cantidad: 0,
    total: 0,
    isLoading: true
};

const pedidosReducer = createSlice({
    name: 'pedi',
    initialState,
    reducers: {
        vaciarPedido: (state) => {
            state.pedidosItems = [];
        },
        agregarPedido: (state, action) => {
            const pedItem = action.payload;
            let validarItem = state.pedidosItems.find((item) => item.id === pedItem.id);
            if (validarItem === undefined) {
                state.pedidosItems = state.pedidosItems.concat(pedItem);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto agregado',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Producto ya fue agregado',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },
        agregarPedidoLocalS: (state, action) => {
            const pedItem = action.payload;
            console.log(pedItem);
            state.pedidosItems = pedItem
        },
        removerPedido: (state, action) => {
            const pedItem = action.payload;
            state.pedidosItems = state.pedidosItems.filter((item) => item.id !== pedItem);
            changeItemCartPlus(state.pedidosItems);
        },
        aumentarPedido: (state, { payload }) => {
            const pedItem = state.pedidosItems.find((item) => item.id === payload.id);
            const item = menu.find((item) => item.id === payload.id);
            pedItem.cantidad = pedItem.cantidad + 1;
            pedItem.precio = item.precio * pedItem.cantidad;
            changeItemCartPlus(state.pedidosItems);
        },
        disminuirPedido: (state, { payload }) => {
            const pedItem = state.pedidosItems.find((item) => item.id === payload.id);
            const item = menu.find((item) => item.id === payload.id);
            pedItem.cantidad = pedItem.cantidad - 1;
            pedItem.precio = item.precio * pedItem.cantidad;
            changeItemCartPlus(state.pedidosItems);
        },
        totalPedido: (state) => {
            let cant = 0;
            let tota = 0;
            state.pedidosItems.forEach((pedi) => {
                cant += pedi.cantidad;
                tota += pedi.precio;
            })
            state.cantidad = cant;
            state.total = tota;
        }
    },
});


export const { vaciarPedido, aumentarPedido, disminuirPedido, agregarPedido, agregarPedidoLocalS, removerPedido, totalPedido } = pedidosReducer.actions
export default pedidosReducer.reducer