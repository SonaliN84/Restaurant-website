import Header from "./Component/Layout/Header";
import { Fragment,useState} from "react";
import Summary from "./Component/Layout/Summary";
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart'
function App() {
  const [isModal,setIsModal]=useState(false);
  const ModalHandler=()=>{
    setIsModal(true)
  }
  const removeModalHandler=()=>{
    setIsModal(false)
  }
  return (
    <Fragment>
       {isModal && <Cart onRemoveModel={removeModalHandler}/>}
       <Header onClickModal={ModalHandler}/>
       {/* <Summary/> */}
       <main>
        <Meals/>
       </main>
       
    </Fragment>
     
  
  );
}

export default App;
