import styled from 'styled-components/native';
import { moderateScale, scale } from 'react-native-size-matters';

import {Text, color} from '~/configs/theme';

export const Touch = styled.TouchableOpacity`
  margin-right: ${moderateScale(10)}px;
`;
export const Notify = styled(Text)`
  width: ${moderateScale(15)}px;
  height: ${moderateScale(15)}px;
  background: ${color.red};
  position: absolute;
  top: ${moderateScale(-5)}px;
  right: ${moderateScale(-5)}px;
  z-index: 5;
  color: ${color.white};
  font-size: ${scale(10)}px;
  text-align: center;
  border-radius: ${moderateScale(15)}px;
  font-weight: bold;
`;