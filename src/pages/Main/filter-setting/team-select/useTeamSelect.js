import { route } from '@router';
import React from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

const teams = [
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
      search: `?${createSearchParams({ ...query, team: value })}`,
    });
  };

  return {
    team: query.get('tier'),
    teamOption: [
      {
        name: '선택 안함',
        value: undefined,
      },
      ...changeToOptions(teams),
    ],
    changeFilterSelectValue,
  };
}

function changeToOptions(arr) {
  return arr.map((item) => ({
    name: item,
    value: item,
  }));
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
