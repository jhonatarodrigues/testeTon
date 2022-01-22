import React, { useCallback } from 'react';

import Content from '~/components/content';
import ProductCard from '~/components/productCard';
import { FlatList, ContentProduct } from './style';

export default function ListProducts() {
  const DATA = [
    {
      id: '1',
      title: 'First Item',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      description:
        'description description description description description description ',
    },
    {
      id: '2',
      title: 'Second Item',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      description: 'description 2 ',
    },
    {
      id: '3',
      title: 'Third Item',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      description: 'description 3 ',
    },
    {
      id: '4',
      title: 'Third Item',
      image: 'https://reactnative.dev/img/tiny_logo.png',
      description: 'description 4 ',
    },
  ];

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
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ marginTop: 10 }}
      />
    </Content>
  );
}
