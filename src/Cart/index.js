import React from 'react';
import {Link} from 'react-router-dom';
import CartSummary from '../CartSummary';
import CartDetails from '../CartDetails';
import './style.css';

const Cart = (props) => {
  const {cartItems} = props;
  return (
    <div className="Cart">
      <h2 className="page-title">
        <Link to="/"><button className="action-button">&lt;&nbsp;</button></Link>
        Order Summary
      </h2>
      <div className="cart-overview">
        <CartDetails cart={cartItems} />
        <CartSummary cart={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
