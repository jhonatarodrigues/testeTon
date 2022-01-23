import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/button';
import { color } from '~/configs/theme';
import { ModalContent, Lente, Box, TextBox, ContentButton } from './style';

export interface IModal {
  text: string;
  type: 'success' | 'error';
  visible: boolean;
  labelButton: string;

  onPress?: () => void;
}

export default function Modal({
  text,
  type,
  visible = false,
  labelButton,
  onPress = () => null,
}: IModal) {
  const renderIcon = useCallback(() => {
    if (type === 'success') {
      return (
        <FontAwesomeIcon icon={faCheckCircle} size={80} color={color.green} />
      );
    } else {
      return (
        <FontAwesomeIcon icon={faTimesCircle} size={80} color={color.red} />
      );
    }
  }, [type]);

  return (
    <ModalContent animationType="slide" transparent={true} visible={visible}>
      <Lente>
        <Box>
          <TextBox>{text}</TextBox>
          {renderIcon()}
          <ContentButton>
            <Button
              background={color.grey}
              label={labelButton}
              labelColor={color.white}
              onPress={() => onPress()}
            />
          </ContentButton>
        </Box>
      </Lente>
    </ModalContent>
  );
}
