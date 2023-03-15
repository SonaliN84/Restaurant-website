import { Fragment } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = () => {
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
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
