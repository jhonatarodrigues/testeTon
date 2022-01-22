import React from 'react';

import { Touch, ContentButton, Label } from './style';

interface IProps {
  background: string;
  labelColor: string;

  label: string;

  onPress?: () => void;
}

export default function Button({
  background,
  labelColor,
  label,
  onPress = () => null,
}: IProps) {
  return (
    <Touch onPress={onPress}>
      <ContentButton backgroundColor={background}>
        <Label color={labelColor}>{label}</Label>
      </ContentButton>
    </Touch>
  );
}
