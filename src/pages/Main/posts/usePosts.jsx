import { useEffect, useState } from 'react';
import apiInstance from '../../../customAxios';
import { createSearchParams } from '../../../utils/createSearchParams';
import { ages } from '../filter-setting/age-select/useAgeSelect';
import { genders } from '../filter-setting/gender-select/useGenderSelect';
import { grades } from '../filter-setting/grade-select/useGradeSelect';
import { teams } from '../filter-setting/team-select/useTeamSelect';
import { useFilterValue } from '../hooks/useFilterValue';

export function usePosts() {
  const { grade, cheer, age_range, gender } = useFilterValue();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();

  const fetch = async () => {
    const gradeIndex = grades?.findIndex((g) => grade === g);
    const ageRangeIndex = ages?.findIndex((a) => age_range === a);
    const cheerIndex = teams?.findIndex((c) => cheer === c);
    const genderIndex = genders?.findIndex((g) => gender === g);

    const searchParams = createSearchParams({
      // user_id: 'july',
      grade: gradeIndex != -1 ? gradeIndex : undefined,
      age_range: ageRangeIndex != -1 ? ageRangeIndex : undefined,
      cheer: cheerIndex != -1 ? cheerIndex : undefined,
      gender: genderIndex != -1 ? genderIndex : undefined,
    });
    const { data } = await apiInstance.get(
      `/match/filter_match/?${searchParams}`,
    );

    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [grade, cheer, age_range, gender]);

  return { isLoading, posts };
}
