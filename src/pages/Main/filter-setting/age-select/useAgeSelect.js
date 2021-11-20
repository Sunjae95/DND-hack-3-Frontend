import { route } from '@router';
import { changeToOptions } from '@utils/changeToOptions';
import { createSearchParams } from '@utils/creareSearchParams';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ages = ['10대', '20대', '30대', '40대 이상'];

export function useAgeSelect() {
  const query = useQuery();
  const navigate = useNavigate();

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams({
        ...query,
        age_range: value,
      })}`,
    });
  };

  return {
    age: query.age,
    ageOption: changeToOptions(ages),
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
