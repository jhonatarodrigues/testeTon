import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const font = {
  default: 'Roboto',
}

export const color = {
  white: '#f5f5f5',
  green: '#00f912',
  black: '#000000',
  greyLight: '#b7b7b7',
  grey: '#505050',
  red: '#f00',
}

export const Text = styled.Text`
  font-family: ${font.default};
  font-size:  ${scale(14)}px;
`;