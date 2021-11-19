import { Button } from '@components/Button';
import { TextButton } from '@components/TextButton';
import { TextField } from '@components/TextField';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Button>123</Button>
      <TextButton>123</TextButton>
      <TextField placeholder="1" />
    </div>
  );
}

export default App;
