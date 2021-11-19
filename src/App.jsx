import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Info } from '@pages/Info';
import { Router } from '@router';
import { RowSpacing } from '@styles/RowSpacing';
import React from 'react';
import { colors } from './assets/colors';
import { Desktop } from './styles/responsive';

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0 auto;
            padding: 0 auto;
            background-color: ${colors.grey[2]};
          }
        `}
      />
      <Container>
        <Desktop>
          <Info />
          <RowSpacing size={98} />
        </Desktop>
        <PageContainer>
          <Router />
        </PageContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PageContainer = styled.div`
  width: 375px;
  height: 100vh;
  background-color: ${colors.white};
`;

export default App;
