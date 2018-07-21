export const addToCart = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  };
};

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_ITEM',
    item
  };
}

export const increaseQuantity = (item) => {
  return {
    type: 'INCREASE_QUANTITY',
    item
  };
}

export const decreaseQuantity = (item) => {
  return {
    type: 'DECREASE_QUANTITY',
    item
  }
}

export const setMessage = (message) => {
  return {
    type: 'SET_MESSAGE',
    message
  };
}
