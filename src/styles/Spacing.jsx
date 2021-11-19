import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export function Spacing({ size }) {
  return (
    <div
      css={css`
        width: 100%;
        height: ${size}px;
      `}
    />
  );
}

Spacing.propTypes = {
  size: PropTypes.number,
};
