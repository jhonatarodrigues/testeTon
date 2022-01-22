import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { color, Text } from '~/configs/theme';

export const ContentItem = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${color.white};
  border-bottom-width: 1;
  border-bottom-color:${color.greyLight};
  overflow: hidden;
  flex-direction: row;
  margin-bottom: ${moderateScale(15)}px;
  flex-wrap: nowrap;
  align-items: center;
  padding-right: ${moderateScale(35)}px;
`;
export const Image = styled.Image`
  width: ${moderateScale(60)}px;
  height: ${moderateScale(60)}px;
`;
export const ContentInfo = styled.View`
  flex:1
  flex-direction: column;
  padding-left: ${moderateScale(15)}px;
`;
export const Title = styled(Text)`
  font-size: ${moderateScale(16)}px;
  color: ${color.grey};
  font-weight: bold;
`;
export const Description = styled(Text)`
  max-width: ${moderateScale(120)}px;
  font-size: ${moderateScale(12)}px;
  color: ${color.grey};
`;
export const Unity = styled(Text)`
  font-size: ${moderateScale(12)}px;
  color: ${color.grey};
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: ${moderateScale(25)}px;
  height: ${moderateScale(25)}px;
  background: #f00;
  border-radius: ${moderateScale(25)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
`;