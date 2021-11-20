import { css } from '@emotion/react';
import React from 'react';
import { colors } from '../assets/colors';

// interface Option {
//   name: string;
//   value: any;
// }

export function SelectButton({
  value,
  options,
  onChange,
  placeholder,
  ...props
}) {
  return (
    <div
      css={[
        css`
          border: 1px solid ${colors.grey[4]};
          border-radius: 16px;
          padding: 5px;
        `,
      ]}
      {...props}
    >
      <select
        onChange={onChange}
        css={css`
          background: none;
          border: none;
          font-size: 14px;
          font-weight: normal;
          box-sizing: border-box;
          width: 100%;

          :focus {
            outline: none;
          }
        `}
        placeholder={placeholder}
        value={value}
        name={props.name}
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
    </div>
  );
}
