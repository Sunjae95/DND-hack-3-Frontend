import { route } from '@router';
import { changeToOptions } from '@utils/changeToOptions';
import { createSearchParams } from '@utils/createSearchParams';
import { useNavigate } from 'react-router-dom';
import { useFilterValue } from '../../hooks/useFilterValue';

export const teams = [
  'DWF_KIA',
  'T1',
  'Gen_G',
  'NongShim_REDFORCE',
  'Liiv_SANDBOX',
  'Afreeca Freecs',
  'kt Rolster',
  'Hanwha_Life_Esports',
  'Fredit_BRION',
  'DRX',
];

export function useTeamSelect() {
  const navigate = useNavigate();
  const query = useFilterValue();
  const { gender, age_range, grade } = query;

  const changeFilterSelectValue = (value) => {
    navigate({
      pathname: route.main,
      search: `?${createSearchParams(
        value != null && value != '선택 안함'
          ? { ...query, cheer: value }
          : { gender, age_range, grade },
      )}`,
    });
  };

  return {
    cheer: query.cheer,
    cheerOption: [
      {
        name: '선택 안함',
        value: undefined,
      },
      ...changeToOptions(teams),
    ],
    changeFilterSelectValue,
  };
}
