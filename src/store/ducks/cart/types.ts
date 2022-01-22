import {IProducts} from '~/@types/api/Products'

//-- Action types
export enum CartTypes {
  'ADD'      = '@cart/ADD_ITEM',
  'REMOVE'   = '@cart/REMOVE_ITEM',
}

interface IProduct extends IProducts {
  quantity: number,
}

export interface ICart {
  products: IProduct[],
}

// -- State Type
export interface ICartState extends ICart {
  loading: boolean,
}
