import { route } from '@router';
import { changeToOptions } from '@utils/changeToOptions';
import { createSearchParams } from '@utils/creareSearchParams';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const teams = [
  'DWG KIA',
  'Gen.G',
  'Hanwha Life Esports',
  'T1',
  'DRX',
  'NS RED FORCE',
  'kt Rolster',
  'Liiv Sandbox',
  'Afreeca Freecs',
  'Fredit BRION',
  'SeolHaeOne Prince',
  'Jin Air GreenWings',
  'Griffin',
  'MVP',
  'bbq olivers',
  'Winners',
];

export function useTeamSelect() {
  const query = useQuery();
  const navigate = useNavigate();

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams({ ...query, cheer: value })}`,
    });
  };

  return {
    cheer: query.cheer,
    cheerOption: changeToOptions(teams),
    changeFilterSelectValue,
  };
}

function useQuery() {
  const { search } = useLocation();
  const url = React.useMemo(() => new URLSearchParams(search), [search]);

  const age_range = url.get('age_range') ?? undefined;
  const grade = url.get('grade') ?? undefined;
  const cheer = url.get('cheer') ?? undefined;
  const gender = url.get('gender') ?? undefined;

  return { age_range, grade, cheer, gender };
}
