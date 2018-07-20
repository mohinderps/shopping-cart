const addToCart = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  };
};

const removeFromCart = (item) => {
  return {
    type: 'REMOVE_ITEM',
    item
  };
}

const increaseQuantity = (item) => {
  return {
    'INCREASE_QUANTITY',
    item
  };
}

const decreaseQuantity = (item) => {
  return {
    type: 'DECREASE_QUANTITY',
    item
  }
}

export addToCart;
export removeFromCart;
export increaseQuantity;
export decreaseQuantity;
