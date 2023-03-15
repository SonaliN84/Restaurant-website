import classes from './Modal.module.css'
const Modal =()=>{
  return (
    <div >
        <div className={classes.Modal}>
       <p>sushi</p>
       <div className={classes.amount}>
        <h3>Total Amount</h3>
        <h3>35</h3>
       </div>
       <button>close</button>
       <button>Order</button>
        </div>
    </div>
  );
}
export default Modal;