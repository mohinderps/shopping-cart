import React from 'react';
import './style.css';
import Price from '../Price';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeItemHandler = this.removeItemHandler.bind(this);
    this.increaseQuantityHandler = this.increaseQuantityHandler.bind(this);
    this.decreaseQuantityHandler = this.decreaseQuantityHandler.bind(this);
  }

  removeItemHandler() {
    const {removeFromCart, item} = this.props;
    removeFromCart(item);
  }

  increaseQuantityHandler() {
    const {increaseQuantity, item} = this.props;
    increaseQuantity(item);

  }

  decreaseQuantityHandler() {
    const {decreaseQuantity, item} = this.props;
    decreaseQuantity(item);
  }

  render() {
    const {item, increaseQuantity, decreaseQuantity, removeFromCart} = this.props;
    return (
      <li className="cart-list-item">
        <div className="cart-list-item-name">
          <span>{item.name}</span>
          <button className="action-button"
            onClick={this.removeItemHandler}>x</button>
        </div>
        <div className="cart-list-item-quantity">
          <button className="action-button"
            onClick={this.decreaseQuantityHandler}>-</button>
          <div className="cart-list-item-quantity-value">{item.quantity}</div>
          <button className="action-button"
              onClick={this.increaseQuantityHandler}>+</button>
        </div>
        <div className="cart-list-item-price">
          <Price price={item.quantity * (item.price - item.discount)} />
        </div>
      </li>
    );
  }
}

export default CartItem;
