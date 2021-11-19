import { ReactComponent as CloseIcon } from '@assets/icons/modal_close.svg';
import { TextButton } from '@components/TextButton';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import { colors } from '../../assets/colors';

export function Modal({
  isOpen,
  onConfirm,
  onClose,
  title,
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
        css={css`
          width: 312px;
        `}
        {...props}
      >
        <>
          <div
            css={css`
              text-align: right;
            `}
          >
            <TextButton
              onClick={onClose}
              padding={10}
              css={css`
                :hover {
                  background-color: ${colors.grey[0]};
                }
              `}
            >
              <CloseIcon />
            </TextButton>
          </div>
          {title != null && <Title>{title}</Title>}
        </>
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

const ModalContainter = styled.div`
  position: relative;
  padding: 15px 20px 24px 20px;
  box-sizing: border-box;
  max-height: 80%;
  max-width: 80%;
  background-color: ${colors.white};
  border-radius: 10px;
`;

const ModalContent = styled.div``;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
