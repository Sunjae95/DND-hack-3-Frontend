import { colors } from '@assets/colors';
import { css } from '@emotion/react';
import React from 'react';
import { SelectButton } from '../../../../components/SelectButton';
import { useAgeSelect } from './useAgeSelect';

export function AgeSelect() {
  const { age, ageOption, changeFilterSelectValue } = useAgeSelect();

  return (
    <SelectButton
      options={ageOption}
      value={age}
      placeholder="나이"
      onChange={(e) => changeFilterSelectValue(e.target.value)}
      css={css`
        background-color: ${colors.white};
      `}
    />
  );
}
