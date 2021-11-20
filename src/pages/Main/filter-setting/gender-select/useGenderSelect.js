import { route } from '@router';
import { changeToOptions } from '@utils/changeToOptions';
import { createSearchParams } from '@utils/creareSearchParams';
import { useNavigate } from 'react-router-dom';
import { useFilterValue } from '../../hooks/useFilterValue';

export const genders = ['여자', '남자'];

export function useGenderSelect() {
  const navigate = useNavigate();

  const query = useFilterValue();
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
