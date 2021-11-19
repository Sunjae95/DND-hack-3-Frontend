import { SelectButton } from '@components/SelectButton';
import React from 'react';
import { useTierSelect } from './useTierSelect';
import { css } from '@emotion/react';

export function TierSelect() {
  const { tier, tierOption, changeFilterSelectValue } = useTierSelect();

  return (
    <SelectButton
      options={tierOption}
      defaultValue={tier}
      value={tier}
      onChange={(e) => changeFilterSelectValue(e)}
      css={css`
        width: 120px;
      `}
    />
  );
}
