import { route } from '@router';
import { changeToOptions } from '@utils/changeToOptions';
import { createSearchParams } from '@utils/creareSearchParams';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const grades = [
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

export function useGradeSelect() {
  const query = useQuery();
  const navigate = useNavigate();

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams({ ...query, grade: value })}`,
    });
  };

  return {
    grade: query.grade,
    gradeOption: changeToOptions(grades),
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
