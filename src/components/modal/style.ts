import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import {Modal } from 'react-native';

import { Text, color } from '~/configs/theme';


export const ModalContent = styled(Modal)`
  width: 100%;
`;

export const Lente = styled.View`
  flex: 1;
  background: rgba(0,0,0,0.5);
  justify-content: flex-end;
`;
export const Box = styled.View`
  max-height: 50%;
  background: ${color.white};
  padding-horizontal: ${moderateScale(20)}px;
  padding-vertical: ${moderateScale(15)}px;
  align-items: center;
`;
export const TextBox = styled(Text)`
  font-size: ${moderateScale(18)}px;
  color: ${color.grey};
  text-align: center;
  margin-bottom: ${moderateScale(15)}px;
`;
export const ContentButton = styled.View`
  margin-top: ${moderateScale(15)}px;
`;