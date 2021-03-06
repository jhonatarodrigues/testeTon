import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { color } from '~/configs/theme';
import Language from '~/language';
import {
  ContentItem,
  Image,
  ContentInfo,
  Title,
  Description,
  Unity,
  ButtonRemove,
} from './style';

interface IProps {
  title: string;
  description: string;
  image: string;
  unity: number;
  index?: number;
  onPressRemove: () => void;
}

export default function ItemCart({
  title,
  description,
  image,
  unity,
  index = 0,
  onPressRemove,
}: IProps) {
  return (
    <ContentItem>
      <Image source={{ uri: image }} />
      <ContentInfo>
        <Title>{title}</Title>
        <Description numberOfLines={1}>{description}</Description>
        <Unity>
          {unity > 1
            ? `${unity} ${Language.components.itemCart.unitys}`
            : `${unity} ${Language.components.itemCart.unity}`}
        </Unity>
      </ContentInfo>
      <ButtonRemove onPress={() => onPressRemove()} testID={`itemCart${index}`}>
        <FontAwesomeIcon icon={faTimes} size={16} color={color.white} />
      </ButtonRemove>
    </ContentItem>
  );
}
