import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { Spacing } from '@styles/Spacing';
import React from 'react';
import { colors } from '../../../../assets/colors';
import { useIsOpen } from '../../../../components/Modal/useIsOpen';

export function LinkButton({ url }) {
  const { isOpen, toggle } = useIsOpen();

  return (
    <>
      <Button
        onClick={toggle}
        backgroundColor="#0137F3"
        textColor={colors.primary}
      >
        링크 보기
      </Button>
      <Modal title="모임에 참여되었습니다." isOpen={isOpen} onClose={toggle}>
        <Spacing size={16} />
        <div>{url}</div>
      </Modal>
    </>
  );
}
