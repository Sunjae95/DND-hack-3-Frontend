import { colors } from '@assets/colors';
import { SelectButton } from '@components/SelectButton';
import { css } from '@emotion/react';
import React from 'react';
import { useGenderSelect } from './useGenderSelect';

export function GenderSelect() {
  const { gender, genderOption, changeFilterSelectValue } = useGenderSelect();

  return (
    <SelectButton
      options={genderOption}
      value={gender}
      placeholder="성별"
      onChange={(e) => changeFilterSelectValue(e.target.value)}
      css={css`
        background-color: ${colors.white};
      `}
    />
  );
}
