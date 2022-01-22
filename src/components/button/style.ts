import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { Text } from '~/configs/theme';

interface IContentButton {
  backgroundColor: string;
}
interface ILabel {
  color: string;
}

export const Touch = styled.TouchableOpacity`
  width: 100%;
`;
export const ContentButton = styled.View<IContentButton>`
  background: ${(props) => props.backgroundColor};
  padding-horizontal: ${moderateScale(20)}px;
  padding-vertical: ${moderateScale(10)}px;
  border-radius: ${moderateScale(10)}px;
`;
export const Label = styled(Text)<ILabel>`
  color: ${(props) => props.color};
`;