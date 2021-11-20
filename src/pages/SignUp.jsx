import React from 'react';
import Text from '@components/Text';
import { TextField } from '@components/TextField';
import { textStyle } from '@constants/inlineStyle';
import { Button } from '@components/Button';
import useForm from '@hooks/useForm';

import { useUserContext } from '@contexts/UserContext/UserProvider';

const SignUp = ({ onClick }) => {
  const { onSignUp } = useUserContext();
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {},
    onSubmit: async () => {
      await onSignUp(values);
      onClick();
    },
  });

  return (
    <>
      <Text value="아이디" style={textStyle('14px', 'bold', '24px', '6px')} />
      <TextField
        placeholder="아이디를 입력해주세요."
        name="user_id"
        onChange={handleChange}
      />
      <Text value="비밀번호" style={textStyle('14px', 'bold', '24px', '6px')} />
      <TextField
        placeholder="비밀번호를 입력해주세요."
        name="password"
        onChange={handleChange}
      />
      <Button
        style={{ height: '44px', marginTop: '12px' }}
        onClick={handleSubmit}
      >
        확인
      </Button>
    </>
  );
};

export default SignUp;
