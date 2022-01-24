import {useState, useEffect} from 'react';

import api from '~/services/api';
import { IProducts, IProductsState } from '~/@types/api/Products';


export const getProducts = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    api.get('gist.githubusercontent.com/jhonatarodrigues/7de34021b8233be469439fd9af0a4fa4/raw/cdfabd0d93e79f4d019e3963043ec693eccf1967/products.json')
      .then(response => response.data)
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  const ret: IProductsState = {
    products,
    loading,
  }

  return ret;
}