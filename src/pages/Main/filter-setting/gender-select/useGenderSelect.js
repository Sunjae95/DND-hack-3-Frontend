import { route } from '@router';
import { changeToOptions } from '@utils/changeToOptions';
import { createSearchParams } from '@utils/creareSearchParams';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const genders = ['여자', '남자'];

export function useGenderSelect() {
  const navigate = useNavigate();

  const query = useQuery();
  const { cheer, age_range, grade } = query;

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams(
        value != null && value != '선택 안함'
          ? { ...query, gender: value }
          : { cheer, age_range, grade },
      )}`,
    });
  };

  return {
    gender: query.gender,
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

function useQuery() {
  const { search } = useLocation();
  const url = React.useMemo(() => new URLSearchParams(search), [search]);

  const age_range = url.get('age_range') ?? undefined;
  const grade = url.get('grade') ?? undefined;
  const cheer = url.get('cheer') ?? undefined;
  const gender = url.get('gender') ?? undefined;

  return { age_range, grade, cheer, gender };
}
