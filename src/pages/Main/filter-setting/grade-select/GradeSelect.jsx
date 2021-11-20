import { colors } from '@assets/colors';
import { SelectButton } from '@components/SelectButton';
import { css } from '@emotion/react';
import React from 'react';
import { useGradeSelect } from './useGradeSelect';

export function GradeSelect() {
  const { grade, gradeOption, changeFilterSelectValue } = useGradeSelect();

  return (
    <SelectButton
      options={gradeOption}
      placeholder="티어"
      value={grade}
      onChange={(e) => changeFilterSelectValue(e.target.value)}
      css={css`
        background-color: ${colors.white};
      `}
    />
  );
}
