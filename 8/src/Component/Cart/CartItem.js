import  './cartitem.css';
import {useState} from 'react';
const CartItem =(props)=>{

 const [modifyAmount,setModifyAmount]=useState(props.amount)   

 const reduceAmountHandler=()=>{
    setModifyAmount((prev)=>{
        return  (prev-1);
    })
   
 }
  return (
    <li className={`item ${modifyAmount===0 ? 'delete':''}`}>
   <div className='i'> {props.name}</div>
   <div className='i a'> {modifyAmount}</div>
   <div className='i'>Rs. {props.price}</div>
   <button onClick={reduceAmountHandler}>-</button>
   <button>+</button>
    </li>
  )
}
export default CartItem;