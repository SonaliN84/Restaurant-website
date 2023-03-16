import CartContext from './cart-context';
import {useState} from 'react';

const CartProvider=(props)=>{

const addItemToCartHandler=(item)=>{
    setItems((prev)=>{
        return [...prev,item];
    })
}
 
const removeItemFromCartHandler=(id)=>{}
 
const [items,setItems]=useState([])

const cartContext={
    items:items,
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
}


  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;