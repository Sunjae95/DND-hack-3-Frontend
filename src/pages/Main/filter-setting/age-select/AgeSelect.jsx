import { css } from '@emotion/react';
import React from 'react';
import { SelectButton } from '../../../../components/SelectButton';
import { useAgeSelect } from './useAgeSelect';

export function AgeSelect() {
  const { age, ageOption, changeFilterSelectValue } = useAgeSelect();

  return (
    <SelectButton
      options={ageOption}
      defaultValue={age}
      value={age}
      onChange={(e) => changeFilterSelectValue(e)}
      css={css`
        width: 80px;
      `}
    />
  );
}
