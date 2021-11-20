import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Stack } from '@styles/Stack';
import React from 'react';
import { Post } from './Post';
import { usePosts } from './usePosts';

export function Posts() {
  const { isLoading, posts } = usePosts();

  if (isLoading || posts == null || posts?.length === 0) {
    return (
      <Empty>
        <div>해당 모임이 없습니다.</div>
        <div>모임을 만들어보세요.</div>
      </Empty>
    );
  }

  return (
    <Stack
      direction="column"
      gutter={16}
      css={css`
        margin: 15px;
      `}
    >
      {posts?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Stack>
  );
}

const Empty = styled.div`
  margin-top: 120px;
  color: #00000066;
  text-align: center;
`;
