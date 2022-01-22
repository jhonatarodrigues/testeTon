import { action } from 'typesafe-actions';
import { CartTypes, ICart } from './types';

export const add = (data: ICart) => action(CartTypes.ADD, { ...data });
export const remove = (id: string) => action(CartTypes.REMOVE, { id });

