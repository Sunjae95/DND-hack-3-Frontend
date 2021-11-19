import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export function RowSpacing({ size }) {
  return (
    <div
      css={css`
        width: ${size}px;
        height: 100%;
      `}
    />
  );
}

RowSpacing.propTypes = {
  size: PropTypes.number,
};
