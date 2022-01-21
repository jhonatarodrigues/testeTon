import { Reducer } from 'redux';
import { ICartState, CartTypes } from './types';

const INITIAL_STATE: ICartState = {
  loading: false,
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case CartTypes.LOAD_REQUEST:
        return { ...state, loading: true}
      case CartTypes.LOAD_SUCCESS:
        return {...state, loading: false, ...action.payload}
      default:
          return state;
  }
}

export default cart;
