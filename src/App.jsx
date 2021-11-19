import { css, Global } from '@emotion/react';
import { Router } from '@router';
import React from 'react';

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0 auto;
            padding: 0 auto;
          }
        `}
      />
      <Router />
    </>
  );
}

export default App;
