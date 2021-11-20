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
  const navigate = useNavigate();

  const query = useQuery();
  const { gender, age_range, cheer } = query;

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams(
        value != null && value != '선택 안함'
          ? { ...query, grade: value }
          : { gender, age_range, cheer },
      )}`,
    });
  };

  return {
    grade: query.grade,
    gradeOption: [
      {
        name: '선택 안함',
        value: undefined,
      },
      ...changeToOptions(grades),
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
