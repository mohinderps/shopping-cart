import React from 'react';
import './style.css';

const Price = props => {
  const {price, discount = 0, negative= false} = props;
  return (
    <div>
      {negative && <span>-</span>}
      <span className={discount === 0 ? "price" : "price cut"}>{price}</span>
      {discount !== 0 && <span className="price">{price - discount}</span>}
    </div>
  );
}

export default Price;
