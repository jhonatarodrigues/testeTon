import React from 'react';
import { Text } from 'react-native';

import Content from '~/components/content';
import ProductCard from '~/components/productCard';
import { ProductList, FlatList } from './style';

export default function ListProducts() {
  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Third Item',
    },
  ];

  const renderItem = ({ item: any }) => <ProductCard />;

  return (
    <Content>
      <Text>lista</Text>
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
