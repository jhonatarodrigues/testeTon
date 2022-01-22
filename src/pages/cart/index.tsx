import React, { useCallback } from 'react';

import Language from '~/language';
import Content from '~/components/content';
import ItemCart from '~/components/itemCart';
import { NumberProducts, FlatList } from './style';

export default function Cart() {
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
      <ItemCart
        title={item.title}
        description={item.description}
        image={item.image}
        unity={index}
      />
    );
  }, []);

  return (
    <Content>
      <NumberProducts>2 {Language.cart.numberProducts}</NumberProducts>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Content>
  );
}
