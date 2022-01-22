import {useState, useEffect} from 'react';

import api from '~/services/api';
import { IProducts } from '~/@types/api/Products';


export const getProducts = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    api.get('https://gist.githubusercontent.com/jhonatarodrigues/7de34021b8233be469439fd9af0a4fa4/raw/4c122eff1e94101c3ba0a83d0234aae73ab29fb8/products.json')
      .then(response => response.data)
      .then(data => setProducts(data));
  }, []);

  return products;
}