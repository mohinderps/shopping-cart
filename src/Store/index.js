import {createStore} from 'redux';
import cartReducer from '../Reducers/cartReducer';

const store = createStore(cartReducer);

export default store;
