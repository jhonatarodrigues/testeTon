import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { color } from '~/configs/theme';

export const ProductList = styled.ScrollView`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  background: #00f;
`;

export const FlatList = styled.FlatList``;