import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../assets/colors';

export function Button({
  textColor,
  backgroundColor,
  leftAddon,
  rightAddon,
  children,
  ...props
}) {
  return (
    <button
      css={css`
        border: none;
        background: none;
        color: ${textColor ?? colors.white};
        background-color: ${backgroundColor ?? colors.primary};
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
          opacity: 0.9;
        }
      `}
      {...props}
    >
      {leftAddon != null && <Left>{leftAddon}</Left>}
      {children}
      {rightAddon != null && <Right>rightAddon</Right>}
    </button>
  );
}

const Left = styled.div`
  position: absolute;
  left: 15px;
`;

const Right = styled.div`
  position: absolute;
  right: 15px;
`;
