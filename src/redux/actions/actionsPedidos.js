import {
    addDoc, collection, getDocs,
} from 'firebase/firestore';
import { getDataFire } from '../../firebase/ConfigFireBase';

//paint pedidos
export const paintPedidosAsync = () => {
    return async () => {
        const getDataPedidos = await getDocs(
            collection(getDataFire, 'pedidos')
        );
        const pedidos = [];
        getDataPedidos.forEach((pedi) => {
            pedidos.push({
                ...pedi.data(),
            });
        });
        return pedidos;
    };
};

// add pedidos
export const addPedidosAsync = (pedi) => {
    return () => {
        addDoc(collection(getDataFire, 'pedidos'), pedi)
    };
};