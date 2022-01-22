import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProducts } from '~/@types/api/Products';
import { getProducts } from '~/hooks/useProducts';
import Content from '~/components/content';
import ProductCard from '~/components/productCard';
import { CartTypes } from '~/store/ducks/cart/types';
import { FlatList, ContentProduct } from './style';

export default function ListProducts() {
  const dispatch = useDispatch();
  const products: IProducts[] = getProducts();

  const addProducts = useCallback(
    (item) => {
      dispatch({
        type: CartTypes.ADD,
        payload: {
          ...item,
          quantity: 1,
        },
      });
    },
    [dispatch],
  );

  const renderItem = useCallback(({ item, index }) => {
    return (
      <ContentProduct second={index % 2 ? true : false}>
        <ProductCard
          title={item.title}
          description={item.description}
          image={item.image}
          buttonAddCartOnPress={() => addProducts(item)}
        />
      </ContentProduct>
    );
  }, []);

  return (
    <Content>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ marginTop: 10 }}
      />
    </Content>
  );
}
