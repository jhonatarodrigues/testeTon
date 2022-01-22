import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { color, Text } from '~/configs/theme';

export const Card = styled.ScrollView`
  width: 100%;
  background-color: ${color.white};
  border: 1px solid ${color.greyLight};
  border-radius: ${moderateScale(10)}px;
  overflow: hidden;
  padding-bottom: ${moderateScale(15)}px;
`;
export const ContentCard = styled.View`
  padding-horizontal: ${moderateScale(15)}px;
`;
export const Image = styled.Image`
  width: 100%;
  height: ${moderateScale(150)}px;
  margin-bottom: ${moderateScale(10)}px;
`;
export const Title = styled(Text)`
  width: 100%;
  font-size: ${moderateScale(16)}px;
  color: ${color.grey};
  font-weight: bold;
`;
export const Description = styled.Text`
  width: 100%;
  font-size: ${moderateScale(14)}px;
  color: ${color.grey};
  margin-bottom: ${moderateScale(10)}px;
`;