import React from 'react';
import './style.css';
import Price from '../Price';
import {addToCart} from '../../Actions';
import store from '../../Store';
import Badge from '../Badge';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  addToCartHandler() {
    const {item} = this.props;
    store.dispatch(addToCart(item));
  }

  render() {
    const {item} = this.props;
    return (
      <div className="Item">
        <div className="item-image">
          <img src={item.img_url} alt="name"/>
        </div>
        <div className="item-details">
          <div className="item-details-name">
            {item.name}
          </div>
          <div className="item-details-price">
            <Price price={item.price} discount={item.discount} />
            <button className="add-to-cart-button"
              onClick={this.addToCartHandler}>Add to cart</button>
          </div>
        </div>
        {item.price - item.discount === item.discount && <Badge />}
      </div>
    );
  }
}



export default Item;
