//-- Action types
export enum CartTypes {
    'LOAD_REQUEST'      = '@cart/LOAD_REQUEST',
    'LOAD_SUCCESS'      = '@cart/LOAD_SUCCESS',
}

//-- Data Types
export interface ICart {

}


// -- State Type
export interface ICartState extends ICart {
  loading: boolean,
}
