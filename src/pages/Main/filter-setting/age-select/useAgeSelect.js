import { route } from '@router';
import { changeToOptions } from '@utils/changeToOptions';
import { createSearchParams } from '@utils/creareSearchParams';
import { useNavigate } from 'react-router-dom';
import { useFilterValue } from '../../hooks/useFilterValue';

export const ages = ['10대', '20대', '30대', '40대 이상'];

export function useAgeSelect() {
  const query = useFilterValue();
  const navigate = useNavigate();
  const { gender, cheer, grade } = query;

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams(
        value != null && value != '선택 안함'
          ? { ...query, age_range: value }
          : { gender, cheer, grade },
      )}`,
    });
  };

  return {
    age: query.age,
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
