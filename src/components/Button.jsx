import styled from '@emotion/styled';
import { colors } from '../assets/colors';

export const Button = styled.button`
  border: none;
  background: none;
  width: 100%;
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 10px;
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
