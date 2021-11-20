import styled from '@emotion/styled';
import { colors } from '../assets/colors';

export const TextButton = styled.button`
  border: none;
  background: none;
  padding: 5px;
  border-radius: 10px;
  color: ${colors.dark};
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey[0]};
  }
`;
