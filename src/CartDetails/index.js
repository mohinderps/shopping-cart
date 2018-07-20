import React from 'react';
import CartItem from '../CartItem';
import './style.css';

const CartDetails = (props) => {
  const {cart, increaseQuantity, decreaseQuantity, removeFromCart} = props;
  return (
    <div className="cart-details">
      <ul className="cart-items-list">
        {cart.map(item => <CartItem key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart} />)}
      </ul>
    </div>
  ) ;
}

export default CartDetails;
