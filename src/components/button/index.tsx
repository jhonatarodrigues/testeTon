import React from 'react';

import { Touch, ContentButton, Label } from './style';

interface IProps {
  background: string;
  labelColor: string;
  label: string;
  testID?: string;

  onPress?: () => void;
}

export default function Button({
  background,
  labelColor,
  label,
  testID,
  onPress = () => null,
}: IProps) {
  return (
    <Touch onPress={onPress} testID={testID}>
      <ContentButton backgroundColor={background}>
        <Label color={labelColor}>{label}</Label>
      </ContentButton>
    </Touch>
  );
}
