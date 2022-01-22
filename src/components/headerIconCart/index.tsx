import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { ApplicationState } from '~/store';
import { color } from '~/configs/theme';
import { Touch, Notify } from './style';

interface IProps {
  onPressIcon: () => void;
}

export default function HeaderIconCart({ onPressIcon }: IProps) {
  const { cart } = useSelector((state: ApplicationState) => state);

  return (
    <Touch onPress={() => onPressIcon()}>
      <Notify>{cart.products.length}</Notify>
      <FontAwesomeIcon icon={faShoppingCart} size={25} color={color.grey} />
    </Touch>
  );
}
