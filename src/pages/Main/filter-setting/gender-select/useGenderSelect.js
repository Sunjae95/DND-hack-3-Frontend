import { route } from '@router';
import React from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

export const genders = ['여자', '남자'];

export function useGenderSelect() {
  const query = useQuery();
  const navigate = useNavigate();

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams({ ...query, gender: value })}`,
    });
  };

  return {
    gender: query.get('gender'),
    genderOption: [
      {
        name: '선택 안함',
        value: undefined,
      },
      ...changeToOptions(genders),
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
