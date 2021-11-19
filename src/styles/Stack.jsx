import { css } from '@emotion/react';
import React from 'react';

// direction?: FlexDirection;
// gutter?: number;
// padding?: number;
// margin?: number;
// justifyContent?: FlexItems;
// alignItems?: FlexItems;
// alignSelf?: FlexAlignSelf;

export function Stack({
  direction = 'row',
  justifyContent,
  alignItems,
  alignSelf,
  gutter = 0,
  padding,
  margin,
  ...props
}) {
  const gutterCss =
    direction === 'row'
      ? css`
          & > * {
            margin-right: ${gutter}px;
          }
          & > :last-child {
            margin-right: 0px;
          }
        `
      : css`
          & > * {
            margin-bottom: ${gutter}px;
          }
          & > :last-child {
            margin-bottom: 0px;
          }
        `;
  return (
    <div
      css={[
        css`
          display: flex;
          flex-direction: ${direction};
          justify-content: ${justifyContent};
          align-items: ${alignItems};
          align-self: ${alignSelf};
          padding: ${padding ? `${padding}px` : null};
          margin: ${margin ? `${margin}px` : null};
          word-break: break-all;
          word-wrap: break-word;
        `,
        gutterCss,
      ]}
      {...props}
    />
  );
}
