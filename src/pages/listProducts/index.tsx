import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IProductsState } from '~/@types/api/Products';
import { getProducts } from '~/hooks/useProducts';
import Content from '~/components/content';
import ProductCard from '~/components/productCard';
import { CartTypes } from '~/store/ducks/cart/types';
import Modal, { IModal } from '~/components/modal';
import Loading from '~/components/loading';
import Language from '~/language';
import { FlatList, ContentProduct } from './style';

export default function ListProducts() {
  const dispatch = useDispatch();
  const { products, loading }: IProductsState = getProducts();
  const [modal, setModal] = useState<IModal>();

  const addProducts = useCallback(
    (item) => {
      dispatch({
        type: CartTypes.ADD,
        payload: {
          ...item,
          quantity: 1,
        },
      });
      setModal({
        text: Language.listProducts.modalSuccess,
        type: 'success',
        visible: true,
        labelButton: Language.components.modal.buttonClose,
        onPress: () => setModal(undefined),
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
          index={index}
        />
      </ContentProduct>
    );
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Content>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ marginTop: 10 }}
      />

      {modal && <Modal {...modal} />}
    </Content>
  );
}
