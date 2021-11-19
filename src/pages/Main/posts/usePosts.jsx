import { useEffect, useState } from 'react';

export function usePosts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();

  const fetch = async () => {
    setTimeout(() => {
      setPosts([]);
    }, 2000);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { isLoading, posts };
}
