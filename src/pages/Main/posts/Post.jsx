import styled from '@emotion/styled';
import { Divider } from '@styles/Divider';
import React from 'react';
import { usePosts } from './usePosts';

export function Post({ index }) {
  const { posts } = usePosts();

  const {
    group_id,
    title,
    content,
    url,
    grade,
    age_range,
    cheer,
    gender,
    created_at,
    organizer,
    joined_member_num,
    status,
  } = posts[index];

  return (
    <Container>
      123
      <Divider />
    </Container>
  );
}

const Container = styled.div`
  padding: 15px;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
`;
