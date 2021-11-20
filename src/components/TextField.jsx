import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../assets/colors';

export function TextField(props) {
  return <Input type="text" {...props}></Input>;
}

export const Input = styled.input`
  border: 1px solid ${colors.opacityDark};
  width: 100%;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  font-weight: bold;
  outline: none;
  &::placeholder {
    color: ${colors.opacityDark};
  }
`;
