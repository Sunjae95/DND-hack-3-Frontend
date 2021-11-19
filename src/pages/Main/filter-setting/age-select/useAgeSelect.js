import { route } from '@router';
import React from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

const ages = ['10대', '20대', '30대', '40대 이상'];

export function useAgeSelect() {
  const query = useQuery();
  const navigate = useNavigate();

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams({ ...query, age: value })}`,
    });
  };

  return {
    age: query.get('age'),
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

  console.log(search);

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
