import { Reducer } from 'redux';
import { ICartState, CartTypes } from './types';

const INITIAL_STATE: ICartState = {
  products: [],
  loading: false,
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case CartTypes.ADD:
        return { ...state, products: [...state.products, action.payload] };
      case CartTypes.REMOVE:
        return { ...state, products: state.products.filter(product => product.id !== action.payload) };
      default:
          return state;
  }
}

export default cart;
