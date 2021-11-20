import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import styled from '@emotion/styled';
import { Spacing } from '@styles/Spacing';
import { copyText } from '@utils/copyText';
import React from 'react';
import { colors } from '../../../../assets/colors';
import { useIsOpen } from '../../../../components/Modal/useIsOpen';

export function LinkButton({ url }) {
  const { isOpen, toggle } = useIsOpen();

  return (
    <>
      <Button
        onClick={toggle}
        backgroundColor={'#0137F311'}
        textColor={colors.primary}
      >
        링크 보기
      </Button>
      <Modal title="모임에 참여되었습니다." isOpen={isOpen} onClose={toggle}>
        <Spacing size={16} />
        <Url>{url}</Url>
        <Spacing size={12} />
        <Button
          textColor="#333333"
          backgroundColor="#00000010"
          onClick={() => {
            copyText(url);
            alert('링크복사가 완료되었습니다 :)');
            toggle();
          }}
        >
          링크 복사하기
        </Button>
      </Modal>
    </>
  );
}

const Url = styled.div`
  text-align: center;
  font-size: 14px;
  color: #33333366;
`;
