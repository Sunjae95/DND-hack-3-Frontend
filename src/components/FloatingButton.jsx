import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Icon } from '@assets/icons/floating button_plus.svg';
import { Link } from 'react-router-dom';

const FloatingBtn = styled(Icon)`
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

const FloatingButton = () => {
  return (
    <FloatingBtn>
      <Link to="/write" />
    </FloatingBtn>
  );
};

export default FloatingButton;
