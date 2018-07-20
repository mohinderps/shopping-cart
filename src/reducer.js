import hydrateStateWithLocalStorage from './storeHelper';

const initialState = {
  cart: []
};

const defaultState = hydrateStateWithLocalStorage(initialState);

const cartReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return addToCart(state, action);

    case 'REMOVE_ITEM':
      return removeFromCart(state, action);

    case 'INCREASE_QUANTITY':
      return increaseQuantity(state, action);

    case 'DECREASE_QUANTITY':
      return decreaseQuantity(state, action);

    default:
      return state;
  }
}

const addToCart = (state, action) => {
  const {cart} = state;
  const itemToAdd = action.item;
  const index = cart.findIndex(item => item.id === itemToAdd.id);
  const updatedCart = index === -1 ?
    [...cart, {...itemToAdd, quantity: 1}] :
    cart.map(item => {
      if(item.id === itemToAdd.id) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return {...state, cart: updatedCart};
}

const removeFromCart = (state, action) => {
  const {cart} = state;
  const itemToRemove = action.item;
  const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return {...state, cart: updatedCart};
}

const increaseQuantity = (state, action) => {
  const {cart} = state;
  const itemToIncrease = action.item;
  const updatedCart = cart.map(item => {
    if(item.id === itemToIncrease.id) {
      return {...item, quantity: item.quantity + 1};
    }
    return item;
  });
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return {...state, cart: updatedCart};
}

const decreaseQuantity = (state, action) => {
  const {cart} = state;
  const itemToDecrease = action.item;
  if(itemToDecrease.quantity === 1) {
    return removeFromCart(state, action);
  }
  const updatedCart = cart.map(item => {
    if(item.id === itemToDecrease.id) {
      return {...item, quantity: item.quantity - 1};
    }
    return item;
  });
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return {...state, cart: updatedCart};
}

export default cartReducer;
