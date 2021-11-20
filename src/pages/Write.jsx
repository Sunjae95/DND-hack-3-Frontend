import React from 'react';
import styled from '@emotion/styled';
import Text from '@components/Text';
import { TextField } from '@components/TextField';
import TextareaField from '@components/TextareaField';
import { SelectButton } from '@components/SelectButton';
import { Button } from '@components/Button';
import { ReactComponent as Close } from '@assets/icons/modal_close.svg';
import { textStyle, selectButtonStyle } from '@constants/inlineStyle';
import axios from 'axios';
import {
  gradeOptions,
  teamOptions,
  ageRangeOptions,
  genderOptions,
} from '@constants/selectOption';
import useForm from '../hooks/useForm';
import { getToken } from '../utils/Token';
import { useNavigate } from 'react-router-dom';

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
      console.log(JSON.stringify({ ...values, organizer: user_id }));
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
      <SelectButtonWrapper>
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
      </SelectButtonWrapper>
      <SelectButton
        style={selectButtonStyle('100%', '12px')}
        name="cheer"
        placeholder="전체 팀"
        options={teamOptions}
        onChange={handleChange}
      />
      <Button
        style={{ height: '44px', marginTop: '72px' }}
        onClick={handleSubmit}
      >
        만들기
      </Button>
    </Container>
  );
}
