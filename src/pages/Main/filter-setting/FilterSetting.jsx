import { colors } from '@assets/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from '@styles/Spacing';
import React from 'react';
import { AgeSelect } from './age-select/AgeSelect';
import { GenderSelect } from './gender-select/GenderSelect';
import { GradeSelect } from './grade-select/GradeSelect';
import { TeamSelect } from './team-select/TeamSelect';

export function FilterSetting() {
  return (
    <Container>
      <Title>필터 설정</Title>
      <Spacing size={10} />
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
        `}
      >
        <GradeSelect />
        <AgeSelect />
        <GenderSelect />
      </div>
      <Spacing size={8} />
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
