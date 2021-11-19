import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { route } from '../../../router';

const tiers = [
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
const ages = ['10대', '20대', '30대', '40대 이상'];
const genders = ['여자', '남자'];
const teams = [
  'DWG KIA',
  'Gen.G',
  'Hanwha Life Esports',
  'T1',
  'DRX',
  'NS RED FORCE',
  'kt Rolster',
  'Liiv Sandbox',
  'Afreeca Freecs',
  'Fredit BRION',
  'SeolHaeOne Prince',
  'Jin Air GreenWings',
  'Griffin',
  'MVP',
  'bbq olivers',
  'Winners',
];
const notSelect = {
  name: '선택 안함',
  value: undefined,
};

export function useFilterSelect() {
  const params = useParams();
  const { tier, age, gender, team } = params;
  const navigate = useNavigate();

  const tierOption = [notSelect, ...changeToOptions(tiers)];
  const ageOption = [notSelect, ...changeToOptions(ages)];
  const genderOption = [notSelect, ...changeToOptions(genders)];
  const teamOption = [notSelect, ...changeToOptions(teams)];

  const changeFilterSelectValue = (value) => {
    console.log('age', value);
    navigate({
      pathname: route.main,
      search: `?${createSearchParams({ ...params, ...value })}`,
    });
  };

  return {
    tier,
    age,
    gender,
    team,
    tierOption,
    ageOption,
    genderOption,
    teamOption,
    changeFilterSelectValue,
  };
}

function changeToOptions(arr) {
  return arr.map((item) => ({
    name: item,
    value: item,
  }));
}
