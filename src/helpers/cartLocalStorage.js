
export const createLocalS  = () =>{
    let ls = localStorage.getItem('cart')
    if(ls === null){
        localStorage.setItem('cart', JSON.stringify(''));
    }else{
        return
    }
}

export const addItemCart  = (item) =>{
    const dataCart = JSON.parse(localStorage.getItem('cart'));
    if(dataCart === ''){
        localStorage.setItem('cart', JSON.stringify([item]));
    }else{
        dataCart.push(item);
        localStorage.setItem('cart', JSON.stringify(dataCart));
    }
}
export const changeItemCartPlus  = (items) =>{
    localStorage.setItem('cart', JSON.stringify(items));
}