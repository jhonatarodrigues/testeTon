import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

import { Text, color } from '~/configs/theme';

export const NumberProducts = styled(Text)`
  color: ${color.grey};
  font-size: ${scale(18)}px;
  font-weight: bold;
  margin-top: ${scale(15)}px;
  margin-bottom: ${scale(30)}px;
`;

export const FlatList = styled.FlatList``;