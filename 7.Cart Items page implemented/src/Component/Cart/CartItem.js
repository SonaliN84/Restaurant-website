import  './cartitem.css'
const CartItem =(props)=>{
  return (
    <li className="item">
   <div className='i'> {props.name}</div>
   <div className='i a'> {props.amount}</div>
   <div className='i'>Rs. {props.price}</div>
    </li>
  )
}
export default CartItem;