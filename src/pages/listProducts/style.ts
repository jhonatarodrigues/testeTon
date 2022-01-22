import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

interface IContentProduct {
  second: boolean;
}

export const FlatList = styled.FlatList``;

export const ContentProduct = styled.View<IContentProduct>`
  flex: 1;
  padding-left: ${(props) => (props.second ? moderateScale(3) : 0 )}px;
  padding-right: ${(props) => (props.second ?  0 : moderateScale(3) )}px;
`;