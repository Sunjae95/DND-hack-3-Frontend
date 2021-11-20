import { route } from '@router';
import { changeToOptions } from '@utils/changeToOptions';
import { createSearchParams } from '@utils/createSearchParams';
import { useNavigate } from 'react-router-dom';
import { useFilterValue } from '../../hooks/useFilterValue';

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

  const query = useFilterValue();
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
