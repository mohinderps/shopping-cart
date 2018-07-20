import React from 'react';
import Items from '../Items';
import NotificationBar from '../NotificationBar';
import {Link} from 'react-router-dom';
import './style.css';

const Home = props => {
  const {itemAddedToCart, cartSize} = props;
  return (
    <div className="Home">
      {/* {itemAddedToCart && <NotificationBar message={itemAddedToCart.name} />} */}
      <div>
        <div className="header">
          <h2 className="page-title">All Items</h2>
          {cartSize > 0 && <Link to="/cart"><button className="go-to-cart-button">Go to cart ({cartSize})</button></Link>}
        </div>
        <Items />
      </div>
    </div>
  );
};

export default Home;
