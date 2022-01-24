import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { Text, color } from '~/configs/theme';

export const Content = styled.View`
  width: 100%;
  flex: 1;
  background: ${color.white};
  justify-content: center;
  align-items: center;
  
`;
export const ContentCenter = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TextLoading = styled(Text)`
  color: ${color.grey};
  font-size: ${moderateScale(16)}px;
`;