import React from 'react';

import { Container } from './style';

interface IProps {
  children: React.ReactNode;
}

export default function Content({ children }: IProps) {
  return <Container>{children}</Container>;
}
