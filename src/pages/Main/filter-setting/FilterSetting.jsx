import { colors } from '@assets/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { AgeSelect } from './age-select/AgeSelect';
import { GenderSelect } from './gender-select/GenderSelect';
import { TeamSelect } from './team-select/TeamSelect';
import { TierSelect } from './tier-select/TierSelect';

export function FilterSetting() {
  return (
    <Container>
      <Title>필터 설정</Title>
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
        `}
      >
        <TierSelect />
        <AgeSelect />
        <GenderSelect />
      </div>
      <TeamSelect />
    </Container>
  );
}

const Container = styled.div`
  padding: 12px 24px;
  background-color: ${colors.grey[0]};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
