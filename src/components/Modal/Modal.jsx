import { TextButton } from '@components/TextButton';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { colors } from '../../colors';

export function Modal({
  isOpen,
  onConfirm,
  onClose,
  title,
  disabledFooter,
  confirmButtonElement,
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const keyController = (event) => {
      return ref && ref.current === event.target && onClose?.();
    };

    document.addEventListener('click', keyController);

    return () => {
      document.removeEventListener('click', keyController);
    };
  }, []);

  return isOpen ? (
    <Container>
      <Overlay ref={ref} onClick={onClose} />
      <ModalContainter
        css={
          !disabledFooter &&
          css`
            padding-bottom: 70px;
          `
        }
        {...props}
      >
        <ModalHeader>
          <TextButton
            onClick={onClose}
            padding={10}
            css={css`
              :hover {
                background-color: ${colors.grey[0]};
              }
            `}
          >
            닫기
          </TextButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainter>
    </Container>
  ) : null;
}

const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${colors.dark};
  opacity: 0.5;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalContainter = styled.div`
  position: relative;
  padding: 15px 20px;
  box-sizing: border-box;
  max-height: 80%;
  max-width: 80%;
  background-color: ${colors.white};
  border-radius: 10px;
`;

const ModalContent = styled.div``;
