import React from 'react';
import './style.css';
import Price from '../Price';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  totalItems(cart) {
    return cart.reduce((res, item) => {
      return res + item.quantity;
    }, 0);
  }

  totalPrice(cart) {
    return cart.reduce((res, item) => {
      return res + (item.price * item.quantity);
    }, 0);
  }

  priceDiscount(cart) {
    return cart.reduce((res, item) => {
      return res + (item.discount * item.quantity);
    }, 0);
  }

  typeDiscount(cart) {
    return cart.reduce((res, item) => {
      if(item.type === 'fiction') {
        let discount = 0.15 * item.price;
        return res + (discount * item.quantity);
      }
      return res;
    }, 0);
  }

  orderValue(cart) {
    return this.totalPrice(cart) - this.priceDiscount(cart) - this.typeDiscount(cart);
  }

  render() {
    const {cart} = this.props;
    return (
      <div className={this.state.className}>
        <div className="cart-summary">
          <div className="padding">Total</div>
          <div className="display-flex-justify-space-between text-light padding">
            <div>Items({this.totalItems(cart)})</div>
            <Price price={this.totalPrice(cart)} />
          </div>
          <div className="text-light padding">
            <div className="display-flex-justify-space-between">
              <div>Discount</div>
              <Price price={this.priceDiscount(cart)} negative/>
            </div>
            <div className="display-flex-justify-space-between">
              <div>Type discount</div>
              <Price price={this.typeDiscount(cart)} negative/>
            </div>
          </div>
          <div className="display-flex-justify-space-between background-gray padding">
            <div>Order Total</div>
            <Price price={this.orderValue(cart)} />
          </div>
        </div>
      </div>
    )
  }

  handleScroll(event) {
    if(window.scrollY > 30) {
      this.setState({
        className: 'fixed'
      });
    }
    if(window.scrollY <= 30) {
      this.setState({
        className: ''
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

export default CartSummary;
