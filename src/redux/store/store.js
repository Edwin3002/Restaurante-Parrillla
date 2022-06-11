import { configureStore } from '@reduxjs/toolkit';
import pedidosReducer from '../reducers/pedidosReducer';


export const store = configureStore({
    reducer:{
        pedidos: pedidosReducer
    },
});

