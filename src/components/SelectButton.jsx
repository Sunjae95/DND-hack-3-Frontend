import { css } from '@emotion/react';
import React from 'react';
import { colors } from '../assets/colors';
// interface Option {
//   name: string;
//   value: any;
// }

export function SelectButton({ options, onChange, placeholder, ...props }) {
  return (
    <select
      onChange={onChange}
      css={css`
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
      `}
      {...props}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options?.map(({ name, value }) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
}
