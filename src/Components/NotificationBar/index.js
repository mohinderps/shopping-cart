import React from 'react';
import './style.css';
import store from '../../Store';

class NotificationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  getMessage() {
    const {cart} = store.getState();
    if(cart.length === 0) {
      return null;
    }
    else {
      return `${cart[cart.length - 1].name} added successfully`;
    }
  }

  render() {
    const message = this.getMessage();
    if(!message) {
      return null;
    }
    return (
      <p>{message}</p>
    );
  }

  componentDidUpdate() {
    
  }

}

export default NotificationBar;
