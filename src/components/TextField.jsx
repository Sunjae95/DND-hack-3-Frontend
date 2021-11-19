import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../assets/colors';

export function TextField(props) {
  return <Input type="text" {...props} />;
}

export const Input = styled.input`
  border: none;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;

  &::placeholder {
    color: ${colors.grey[1]};
  }
`;
