import { SelectButton } from '@components/SelectButton';
import { css } from '@emotion/react';
import React from 'react';
import { useTierSelect } from './useTierSelect';

export function TierSelect() {
  const { tier, tierOption, changeFilterSelectValue } = useTierSelect();

  return (
    <SelectButton
      options={tierOption}
      placeholder="티어"
      value={tier}
      onChange={(e) => changeFilterSelectValue(e)}
      css={css`
        width: 120px;
      `}
    />
  );
}
