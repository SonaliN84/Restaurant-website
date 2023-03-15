import Header from "./Component/Layout/Header";
import { Fragment } from "react";
import Summary from "./Component/Layout/Summary";
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart'
function App() {
  return (
    <Fragment>
       <Cart/>
       <Header/>
       {/* <Summary/> */}
       <main>
        <Meals/>
       </main>
       
    </Fragment>
     
  
  );
}

export default App;
