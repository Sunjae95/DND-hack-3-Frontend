import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import mainBanner from '@assets/images/main_banner.png';
import { css } from '@emotion/react';
import React from 'react';

export function Main() {
  return (
    <>
      <div
        css={css`
          padding: 15px;
          text-align: center;
        `}
      >
        <Logo />
      </div>
      <img
        src={mainBanner}
        alt="main banner"
        css={css`
          width: 375px;
          height: 125px;
        `}
      />
    </>
  );
}
