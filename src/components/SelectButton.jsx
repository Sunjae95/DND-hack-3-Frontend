import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../assets/colors';
// interface Option {
//   name: string;
//   value: any;
// }

export function SelectButton({ options, onChange, ...props }) {
  return (
    <Container onChange={(e) => onChange(e.target.value)} {...props}>
      {options?.map(({ name, value }) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </Container>
  );
}

const Container = styled.select`
  background: none;
  border: 1px solid ${colors.grey[4]};
  border-radius: 16px;
  font-size: 16px;
  font-weight: normal;
  min-width: 60px;
  padding: 5px 8px;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;
