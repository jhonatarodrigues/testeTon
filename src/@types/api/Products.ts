export interface IProducts {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
}

export interface IProductsState {
  products: IProducts[];
  loading: boolean;
}