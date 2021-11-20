import { ReactComponent as Icon } from '@assets/icons/floating button_plus.svg';
import { Modal } from '@components/Modal';
import { TextButton } from '@components/TextButton';
import styled from '@emotion/styled';
import SignUp from '@pages/SignUp';
import React from 'react';
import { useNavigate } from 'react-router';
import { useIsOpen } from '../components/Modal/useIsOpen';
import { getToken } from '../utils/Token';

const FloatingBtn = styled(Icon)`
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

const FloatingButton = () => {
  const navigate = useNavigate();
  const { isOpen, toggle } = useIsOpen();
  const user = getToken('user');

  return (
    <>
      <TextButton
        onClick={() => {
          if (user != null) {
            navigate({ pathname: '/write' });
          } else {
            toggle();
          }
        }}
      >
        <FloatingBtn />
      </TextButton>
      <Modal title="회원가입" isOpen={isOpen} onClose={toggle}>
        <SignUp onClick={toggle} />
      </Modal>
    </>
  );
};

export default FloatingButton;
