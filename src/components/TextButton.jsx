import styled from '@emotion/styled';
import { colors } from '../colors';

export const TextButton = styled.button`
  border: none;
  background: none;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  color: ${colors.dark};
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey[0]};
  }
`;
