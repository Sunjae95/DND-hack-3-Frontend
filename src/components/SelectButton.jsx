import styled from '@emotion/styled';
import React from 'react';

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
  border: none;
  font-size: 16px;
  font-weight: bold;
  min-width: 60px;
  padding: 5px 0;

  :focus {
    outline: none;
  }
`;
