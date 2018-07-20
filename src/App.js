import React, { Component } from 'react';
import Home from './Home';
import Cart from './Cart';
import './App.css';
import {Route, Redirect} from 'react-router-dom';

import store from './store';
import * as action from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity(itemToIncrease) {
    const {cart} = this.state;
    const updatedCart = cart.map(item => {
      if(item.id === itemToIncrease.id) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });

    this.setState({
      cart: updatedCart
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  decreaseQuantity(itemToDecrease) {
    if(itemToDecrease.quantity === 1) {
      this.removeFromCart(itemToDecrease);
      return;
    }
    const {cart} = this.state;
    const updatedCart = cart.map(item => {
      if(item.id === itemToDecrease.id) {
        return {...item, quantity: item.quantity - 1};
      }
      return item;
    });

    this.setState({
      cart: updatedCart
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  addToCart(itemToAdd) {
    const {cart} = this.state;
    const index = cart.findIndex(item => item.id === itemToAdd.id);
    const updatedCart = index === -1 ?
      [...cart, {...itemToAdd, quantity: 1}] :
      cart.map(item => {
        if(item.id === itemToAdd.id) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });

    this.setState({
      cart: updatedCart
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    this.itemAddedToCart = itemToAdd;
  }

  removeFromCart(itemToRemove) {
    const {cart} = this.state;
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    this.setState({
      cart: updatedCart
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  hydrateStateWithLocalStorage() {
    for(let key in this.state) {
      if(localStorage.hasOwnProperty(key)){
        let value = localStorage.getItem(key);
        value = JSON.parse(value);
        this.setState({
          [key]: value
        });
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  render() {
    const {cart} = this.state;
    return (
      <div>
        <Route exact path="/" render={() => <Home addToCart={this.addToCart}
          cartSize={cart.length}
          itemAddedToCart={this.itemAddedToCart || null} />} />

        <Route exact path="/cart" render={() => <Cart cartItems={cart}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          removeFromCart={this.removeFromCart}/>} />
      </div>
    );
  }
}

export default App;
