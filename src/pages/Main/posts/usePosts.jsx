import { useEffect, useState } from 'react';
import apiInstance from '../../../customAxios';

export function usePosts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();

  const fetch = async () => {
    const { data } = await apiInstance.get('/match/filter_match/');
    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { isLoading, posts };
}
