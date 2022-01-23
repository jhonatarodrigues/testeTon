import { Reducer } from 'redux';
import { ICartState, CartTypes } from './types';

const INITIAL_STATE: ICartState = {
  products: [],
  loading: false,
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case CartTypes.ADD:
        if (state.products.find(p => p.id === action.payload.id)) {
          return {...state, products: state.products.map(p => p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p)};
        }
        return { ...state, products: [...state.products, action.payload] };
      case CartTypes.REMOVE:
        if (state.products.find(p => p.id === action.payload && p.quantity > 1)) {
          return {...state, products: state.products.map(p => p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p)};
        }
        return { ...state, products: state.products.filter(product => product.id !== action.payload) };
      default:
          return state;
  }
}

export default cart;
