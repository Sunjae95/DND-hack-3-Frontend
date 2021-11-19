import { Button } from '@components/Button';
import { SelectButton } from '@components/SelectButton';
import { TextButton } from '@components/TextButton';
import { TextField } from '@components/TextField';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Button>123</Button>
      <TextButton>123</TextButton>
      <TextField placeholder="1" />
      <SelectButton options={[{ name: '123', value: '123' }]} />
    </div>
  );
}

export default App;
