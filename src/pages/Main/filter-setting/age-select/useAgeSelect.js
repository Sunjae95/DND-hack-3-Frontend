import { route } from '@router';
import React from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

export const ages = ['10대', '20대', '30대', '40대 이상'];

export function useAgeSelect() {
  const query = useQuery();
  const navigate = useNavigate();

  const changeFilterSelectValue = (value) => {
    const grade = query.get('grade');
    const cheer = query.get('cheer');
    const gender = query.get('gender');

    navigate({
      pathname: route.main,
      search: `?${createSearchParams({
        grade,
        cheer,
        gender,
        age_range: value,
      })}`,
    });
  };

  return {
    age: query.get('age_range'),
    ageOption: [
      {
        name: '선택 안함',
        value: undefined,
      },
      ...changeToOptions(ages),
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
