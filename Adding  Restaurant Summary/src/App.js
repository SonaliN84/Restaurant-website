import Header from "./Component/Layout/Header";
import { Fragment } from "react";
import Summary from "./Component/Layout/Summary";
import Meals from './Component/Meals/Meals'
function App() {
  return (
    <Fragment>
       <Header/>
       {/* <Summary/> */}
       <main>
        <Meals/>
       </main>
       
    </Fragment>
     
  
  );
}

export default App;
