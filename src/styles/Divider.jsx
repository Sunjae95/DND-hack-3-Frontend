import styled from '@emotion/styled';
import { colors } from '../assets/colors';

export const Divider = styled.div`
  height: 1px;
  color: ${({ color }) => color ?? colors.grey[1]};
`;
