import { colors } from '@assets/colors';
import { SelectButton } from '@components/SelectButton';
import { css } from '@emotion/react';
import React from 'react';
import { useTeamSelect } from './useTeamSelect';

export function TeamSelect() {
  const { cheer, cheerOption, changeFilterSelectValue } = useTeamSelect();

  return (
    <SelectButton
      options={cheerOption}
      placeholder="전체 팀"
      value={cheer}
      onChange={(e) => changeFilterSelectValue(e.target.value)}
      css={css`
        flex: 1;
        background-color: ${colors.white};
      `}
    />
  );
}
