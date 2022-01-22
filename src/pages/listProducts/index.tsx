import React, { useCallback } from 'react';

import { IProducts } from '~/@types/api/Products';
import { getProducts } from '~/hooks/useProducts';
import Content from '~/components/content';
import ProductCard from '~/components/productCard';
import { FlatList, ContentProduct } from './style';

export default function ListProducts() {
  const products: IProducts[] = getProducts();
  const renderItem = useCallback(({ item, index }) => {
    return (
      <ContentProduct second={index % 2 ? true : false}>
        <ProductCard
          title={item.title}
          description={item.description}
          image={item.image}
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
