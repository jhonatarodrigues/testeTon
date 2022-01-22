import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { color } from '~/configs/theme';

export const Card = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${color.white};
  padding-horizontal: ${moderateScale(20)}px;
  border: 1px solid;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: ${moderateScale(20)}px;
  color: #f00;
`;
export const Description = styled.Text`
  width: 100%;
  font-size: ${moderateScale(14)}px;
  color: #ff0;
`;