import React, {useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider'



function App() {

  const [cartIsVisible,setCartIsVisible] = useState(false)

  const showCartHandler = ()=>{
    setCartIsVisible(true)
  }

  const hideCartHandler = () =>{
    setCartIsVisible(false)
  }

  return (
    <CartProvider>
      {cartIsVisible && <Cart notVisible={hideCartHandler}/>}
      <Header isVisible={showCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
