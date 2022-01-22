import React from 'react';

import { color } from '~/configs/theme';
import Button from '~/components/button';
import { Card, Title, Description } from './style';

export default function ProductCard() {
  return (
    <Card>
      <Title>Produto</Title>
      <Description numberOfLines={2}>
        a asd asd as das d as da s da sd a sd as a asd asd as das d as da s da
        sd a sd as a asd asd as das d as da s da sd a sd as
      </Description>
      <Button
        background={color.green}
        labelColor={color.black}
        label="Adicionar ao carrinho"
      />
    </Card>
  );
}
