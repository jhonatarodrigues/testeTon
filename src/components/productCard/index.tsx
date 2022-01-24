import React from 'react';

import { color } from '~/configs/theme';
import Button from '~/components/button';
import { Card, Title, Description, Image, ContentCard } from './style';

interface IProps {
  title: string;
  description: string;
  image: string;
  index?: number;

  buttonAddCartOnPress?: () => void;
}

export default function ProductCard({
  title,
  description,
  image,
  index,
  buttonAddCartOnPress,
}: IProps) {
  return (
    <Card>
      <Image
        resizeMode="cover"
        source={{
          uri: image,
        }}
      />
      <ContentCard>
        <Title>{title}</Title>
        <Description numberOfLines={2}>{description}</Description>
        <Button
          background={color.green}
          labelColor={color.black}
          label="Adicionar ao carrinho"
          onPress={buttonAddCartOnPress}
          testID={`buttonModalAddCart${index}`}
        />
      </ContentCard>
    </Card>
  );
}
