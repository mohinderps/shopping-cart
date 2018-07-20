import React from 'react';
import CartItem from '../CartItem';
import './style.css';

const CartDetails = (props) => {
  const {cart} = props;
  return (
    <div className="cart-details">
      <ul className="cart-items-list">
        <li className="cart-list-item">
          <div className="cart-header-name">Items</div>
          <div className="cart-header-quantity">Quantity</div>
          <div className="cart-header-price">Price</div>
        </li>
        {cart.map(item => <CartItem key={item.id} item={item} />)}
      </ul>
    </div>
  ) ;
}

export default CartDetails;
