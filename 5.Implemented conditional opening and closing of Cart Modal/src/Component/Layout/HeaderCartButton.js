import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import {  useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop';
const HeaderCartButton=(props)=>{
  
// const [ifClicked,setIfClicked]=useState(false);
// const modalHandler=()=>{
//     setIfClicked(true)
// }
 const modalHandler=()=>{
    props.Modal();
 }
  return (
    <div>
    {/* {ifClicked && <Backdrop/>}
    {ifClicked && <Modal/>} */}
<div>
    {/* <button className={classes.button} onClick={modalHandler}> */}
    <button className={classes.button} onClick={modalHandler}>
        <span>
            <CartIcon className={classes.icon}/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>
    </div>
    </div>
  )
}
export default HeaderCartButton;