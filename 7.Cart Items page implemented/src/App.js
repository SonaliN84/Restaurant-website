import Header from "./Component/Layout/Header";
import { Fragment, useState } from "react";
import Summary from "./Component/Layout/Summary";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal(true);
  };
  const removeModalHandler = () => {
    setIsModal(false);
  };
  return (
    <CartProvider>
      {isModal && <Cart onRemoveModel={removeModalHandler} />}
      <Header onClickModal={ModalHandler} />
      {/* <Summary/> */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
