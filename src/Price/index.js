import React from 'react';
import './style.css';

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {price, discount = 0, negative= false} = this.props;
    return (
      <div>
        {negative && <span>-</span>}
        <span className={discount === 0 ? "price" : "price cut"}>{price}</span>
        {discount !== 0 && <span className="price">{price - discount}</span>}
      </div>
    );
  }
}

export default Price;
