import { route } from '@router';
import React from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

const tiers = [
  '아이언',
  '브론즈',
  '실버',
  '골드',
  '플래티넘',
  '다이아몬드',
  '마스터',
  '그랜드마스터',
  '챌린저',
];

export function useTierSelect() {
  const query = useQuery();
  const navigate = useNavigate();

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams({ ...query, tier: value })}`,
    });
  };

  return {
    tier: query.get('tier'),
    tierOption: [
      {
        name: '선택 안함',
        value: undefined,
      },
      ...changeToOptions(tiers),
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

  console.log(search);

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
