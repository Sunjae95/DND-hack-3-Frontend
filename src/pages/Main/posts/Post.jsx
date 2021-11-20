import { Button } from '@components/Button';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Divider } from '@styles/Divider';
import { Spacing } from '@styles/Spacing';
import { Stack } from '@styles/Stack';
import React, { useState } from 'react';
import { colors } from '../../../assets/colors';
import { Modal, useIsOpen } from '../../../components/Modal';
import { getToken } from '../../../utils/Token';
import SignUp from '../../SignUp';
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
  const [joinedMemberNum, setJoinedMemberNum] = useState(joined_member_num);

  const user = getToken('user');
  const { isOpen, toggle } = useIsOpen();

  const addJoinedMemberNum = () => {
    setJoinedMemberNum(joinedMemberNum + 1);
  };

  return (
    <Container>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          <Organizer>{organizer}</Organizer>
          <CreatedAt>{created_at}</CreatedAt>
        </div>
        <JoinedMemberNumber>
          모집 {joinedMemberNum > 4 ? 4 : joinedMemberNum}/4명
        </JoinedMemberNumber>
      </div>
      <Spacing size={12} />
      <Divider />
      <Spacing size={12} />
      <Title>{title}</Title>
      <Spacing size={5} />
      <Content>{content}</Content>
      <Spacing size={12} />
      <Stack gutter={5}>
        {grade != null && <Tag>{grades[grade - 1]}</Tag>}
        {age_range != null && <Tag>{ages[age_range - 1]}</Tag>}
        {gender != null && <Tag>{genders[gender - 1]}</Tag>}
        {cheer != null && <Tag>{teams[cheer - 1]}</Tag>}
      </Stack>
      <Spacing size={24} />
      {status ? (
        <LinkButton url={url} />
      ) : joinedMemberNum >= 4 ? (
        <Button backgroundColor={colors.grey[1]} textColor={colors.grey[5]}>
          마감된 모임
        </Button>
      ) : !user ? (
        <>
          <Button onClick={toggle}>참가</Button>
          <Modal title="회원가입" isOpen={isOpen} onClose={toggle}>
            <SignUp onClick={toggle} />
          </Modal>
        </>
      ) : (
        <JoinButton group={group_id} addJoinedMemberNum={addJoinedMemberNum} />
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
  font-size: 20px;
  color: #333333;
`;

const Content = styled.div`
  color: #333333;
  font-size: 14px;
`;

const Tag = styled.div`
  background-color: #00000006;
  border-radius: 16px;
  padding: 4px 8px;
  color: #00000080;
  font-size: 10px;
`;

const JoinedMemberNumber = styled.div`
  background-color: #0137f322;
  border-radius: 4px;
  color: #0137f3;
  width: 66px;
  height: 20px;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreatedAt = styled.div`
  color: #333333;
  opacity: 0.5;
  margin-top: 5px;
  font-size: 11px;
`;

const Organizer = styled.div`
  color: #33333388;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
`;
