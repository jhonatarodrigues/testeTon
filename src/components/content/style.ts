import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { color } from '~/configs/theme';

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${color.white};
  padding-horizontal: ${moderateScale(20)}px;
`;
