import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '~/store';
import Language from '~/language';
import Content from '~/components/content';
import ItemCart from '~/components/itemCart';
import { CartTypes } from '~/store/ducks/cart/types';
import { NumberProducts, FlatList } from './style';

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: ApplicationState) => state);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <ItemCart
          title={item.title}
          description={item.description}
          image={item.image}
          unity={item.quantity}
          onPressRemove={() => {
            dispatch({ type: CartTypes.REMOVE, payload: item.id });
          }}
        />
      );
    },
    [cart],
  );

  const renderFlatlist = useCallback(() => {
    return (
      <FlatList
        data={cart.products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }, [cart, renderItem]);

  return (
    <Content>
      {cart.products.length > 0 ? (
        <>
          <NumberProducts>
            {cart.products.length} {Language.cart.numberProducts}
          </NumberProducts>
          {renderFlatlist()}
        </>
      ) : (
        <NumberProducts>{Language.cart.notFound}</NumberProducts>
      )}
    </Content>
  );
}
