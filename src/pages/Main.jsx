import { Button } from '@components/Button';
import { Modal, useIsOpen } from '@components/Modal';
import React from 'react';

export function Main() {
  const { isOpen, toggle } = useIsOpen();
  return (
    <>
      <Button onClick={toggle}>123</Button>
      <Modal isOpen={isOpen} onClose={toggle}>
        123
      </Modal>
    </>
  );
}
