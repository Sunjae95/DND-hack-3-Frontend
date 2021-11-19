import { colors } from '@assets/colors';
import styled from '@emotion/styled';
import { Spacing } from '@styles/Spacing';
import React from 'react';
import { ReactComponent as InfoLogo } from '../assets/icons/info-logo.svg';
import banner from '../assets/images/web_banner.png';

export function Info() {
  return (
    <Container>
      <InfoLogo />
      <Spacing size={8} />
      <Title>
        롤드컵 8강 OPEN!
        <br /> 같이 보며 즐기자
      </Title>
      <Spacing size={8} />
      <Date>2021.11.22~</Date>
      <Spacing size={32} />
      <img src={banner} alt="banner" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`;

const Date = styled.div`
  font-size: 16px;
  color: ${colors.primary};
`;
