import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '~/store';
import Language from '~/language';
import Content from '~/components/content';
import ItemCart from '~/components/itemCart';
import { CartTypes } from '~/store/ducks/cart/types';
import Modal, { IModal } from '~/components/modal';
import { NumberProducts, FlatList } from './style';

export default function Cart() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<IModal>();
  const { cart } = useSelector((state: ApplicationState) => state);

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <ItemCart
          title={item.title}
          description={item.description}
          image={item.image}
          unity={item.quantity}
          index={index}
          onPressRemove={() => {
            dispatch({ type: CartTypes.REMOVE, payload: item.id });
            setModal({
              text: Language.cart.modalRemoveSuccess,
              type: 'success',
              visible: true,
              labelButton: Language.components.modal.buttonClose,
              onPress: () => setModal(undefined),
            });
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
      {modal && <Modal {...modal} />}
    </Content>
  );
}
