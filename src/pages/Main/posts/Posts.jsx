import styled from '@emotion/styled';
import { Stack } from '@styles/Stack';
import React from 'react';
import { Post } from './Post';
import { usePosts } from './usePosts';

export function Posts() {
  const { posts } = usePosts();

  if (posts?.length === 0) {
    return (
      <Empty>
        <div>해당 모임이 없습니다.</div>
        <div>모임을 만들어보세요.</div>
      </Empty>
    );
  }

  return (
    <Stack direction="column" gutter={10}>
      {posts?.map((_, index) => (
        <Post key={index} index={index} />
      ))}
    </Stack>
  );
}

const Empty = styled.div`
  margin-top: 120px;
  color: #00000066;
  text-align: center;
`;
