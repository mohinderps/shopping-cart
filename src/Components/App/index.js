import React from 'react';
import Home from '../Home';
import Cart from '../Cart';
import './style.css';
import {Route} from 'react-router-dom';

import store from '../../Store';

const App = () => {
  const {cart} = store.getState();
  return (
    <div>
      <Route exact path="/" render={() => <Home cartSize={cart.length}
        itemAddedToCart={null} />} />

      <Route exact path="/cart" render={() => <Cart cartItems={cart} />} />
    </div>
  );
}

export default App;
