import { Button } from '@components/Button';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from '@styles/Spacing';
import { Stack } from '@styles/Stack';
import React from 'react';
import { colors } from '../../../assets/colors';
import { ages } from '../filter-setting/age-select/useAgeSelect';
import { genders } from '../filter-setting/gender-select/useGenderSelect';
import { grades } from '../filter-setting/grade-select/useGradeSelect';
import { teams } from '../filter-setting/team-select/useTeamSelect';
import { LinkButton } from '../posts/link-button/LinkButton';
import { JoinButton } from './join-button/JoinButton';

export function Post({ post }) {
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
  } = post;

  return (
    <Container>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
          border-bottom: 1px solid ${colors.grey[2]}; ;
        `}
      >
        <div
          css={css`
            color: #333333;
          `}
        >
          {organizer}
          <div
            css={css`
              color: #333333;
              opacity: 0.5;
              margin-top: 5px;
            `}
          >
            {created_at}
          </div>
        </div>
        <div
          css={css`
            background-color: #0137f322;
            border-radius: 4px;
            padding: 5px;
            color: #0137f3;
            height: 20px;
          `}
        >
          모집 {joined_member_num}/4명
        </div>
      </div>
      <Spacing size={12} />
      <Title>{title}</Title>
      <Spacing size={5} />
      <Content>{content}</Content>
      <Spacing size={12} />
      <Stack gutter={5}>
        <Tag>{grades[grade ?? 0]}</Tag>
        <Tag>{ages[age_range ?? 0]}</Tag>
        <Tag>{genders[gender ?? 0]}</Tag>
        <Tag>{teams[cheer ?? 0]}</Tag>
      </Stack>
      <Spacing size={24} />
      {joined_member_num >= 4 ? (
        <Button backgroundColor={colors.grey[1]} textColor={colors.grey[4]}>
          마감된 모임
        </Button>
      ) : status ? (
        <LinkButton url={url} />
      ) : (
        <JoinButton group={group_id} />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 15px;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const Content = styled.div`
  color: #333333;
`;

const Tag = styled.div`
  background-color: ${colors.grey[2]};
  border-radius: 16px;
  padding: 4px 8px;
  color: ${colors.grey[4]};
`;
