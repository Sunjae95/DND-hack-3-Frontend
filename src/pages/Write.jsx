import { ReactComponent as Close } from '@assets/icons/modal_close.svg';
import { Button } from '@components/Button';
import { SelectButton } from '@components/SelectButton';
import Text from '@components/Text';
import TextareaField from '@components/TextareaField';
import { TextField } from '@components/TextField';
import { selectButtonStyle, textStyle } from '@constants/inlineStyle';
import {
  ageRangeOptions,
  genderOptions,
  gradeOptions,
  teamOptions,
} from '@constants/selectOption';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from '@styles/Spacing';
import { Stack } from '@styles/Stack';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { getToken } from '../utils/Token';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
  align-items: center;
`;

const SelectButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Write() {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {},
    onSubmit: async () => {
      const { user_id } = getToken('user');
      await axios({
        method: 'POST',
        url: 'https://hack-dnd.herokuapp.com/match/group/',
        data: JSON.stringify({ ...values, organizer: user_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate({ pathname: '/' });
    },
  });

  return (
    <Container>
      <TitleWrapper>
        <Text value="모임만들기" style={textStyle('24px', 'bold')} />
        <Close onClick={() => history.back()} />
      </TitleWrapper>
      <Text
        value="모임 제목"
        style={textStyle('14px', 'bold', '24px', '6px')}
      />
      <TextField
        placeholder="필수입력"
        name="title"
        onChange={handleChange}
      ></TextField>
      <Text
        value="모임 내용"
        style={textStyle('14px', 'bold', '24px', '6px')}
      />
      <TextareaField name="content" onChange={handleChange} />
      <Text
        value="오픈채팅방 주소"
        style={textStyle('14px', 'bold', '24px', '6px')}
      />
      <TextField
        name="url"
        onChange={handleChange}
        placeholder="카카오톡 오픈채팅방 생성 후 입력해주세요."
      ></TextField>
      <Text
        value="필터 설정"
        style={textStyle('14px', 'bold', '24px', '6px')}
      />
      <Stack gutter={10}>
        <SelectButton
          style={selectButtonStyle('120px')}
          name="grade"
          placeholder="티어"
          options={gradeOptions}
          onChange={handleChange}
        />
        <SelectButton
          style={selectButtonStyle('94px')}
          name="age_range"
          placeholder="나이"
          options={ageRangeOptions}
          onChange={handleChange}
        />
        <SelectButton
          style={selectButtonStyle('94px')}
          name="gender"
          placeholder="성별"
          options={genderOptions}
          onChange={handleChange}
        />
      </Stack>
      <div
        css={css`
          display: flex;
        `}
      >
        <SelectButton
          style={selectButtonStyle('100%', '12px')}
          name="cheer"
          placeholder="전체 팀"
          options={teamOptions}
          onChange={handleChange}
          css={css`
            flex: 1;
          `}
        />
      </div>
      <Button
        style={{ height: '44px', marginTop: '72px' }}
        onClick={handleSubmit}
      >
        만들기
      </Button>
      <Spacing size={50} />
    </Container>
  );
}
