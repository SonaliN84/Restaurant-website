import { Fragment,useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
   const [itemAmount,SetItemAmount]=useState(1);
  const inputAmountHandler=(event)=>{
    SetItemAmount(event.target.value);
    console.log(event.target.value)
  }
  const addItemInCart=(event)=>{
    event.preventDefault();
    console.log(itemAmount)
    props.onItemAdd(itemAmount);
  }

  return (
    //   <div className={classes.Formmain}>
    //   <div className={classes.form}>
    //   <h4>Amount</h4>
    //   <input type="text"/>
    //   </div>

    //   <button>+Add</button>
    //   </div>

    <form className={classes.form}>
      <Input 
       
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          onChange:inputAmountHandler,
        }}
      />
      <button onClick={addItemInCart}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
