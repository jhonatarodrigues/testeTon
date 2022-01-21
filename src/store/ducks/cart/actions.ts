import { action } from 'typesafe-actions';
import { CartTypes, ICart } from './types';

export const loadRequest = () => action(CartTypes.LOAD_REQUEST);
export const loadSuccess = (data: ICart) => action(CartTypes.LOAD_SUCCESS, { ...data });

