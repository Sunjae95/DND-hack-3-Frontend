import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import mainBanner from '@assets/images/main_banner.png';
import { css } from '@emotion/react';
import { Spacing } from '@styles/Spacing';
import React from 'react';
import FloatingButton from '@components/FloatingButton';
import { FilterSetting } from './filter-setting/FilterSetting';
import SignUp from '@pages/SignUp.jsx';
import { Posts } from './posts/Posts';

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
      <FilterSetting />
      <Spacing size={20} />
      <Posts />
      <Spacing size={50} />
      <FloatingButton></FloatingButton>
    </>
  );
}
