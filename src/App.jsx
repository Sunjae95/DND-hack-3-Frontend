import { Button } from '@components/Button';
import { Modal, useIsOpen } from '@components/Modal';
import { SelectButton } from '@components/SelectButton';
import { TextButton } from '@components/TextButton';
import { TextField } from '@components/TextField';
import React from 'react';

function App() {
  const { isOpen, toggle } = useIsOpen();

  return (
    <div className="App">
      <Button onClick={toggle}>123</Button>
      <TextButton>123</TextButton>
      <TextField placeholder="1" />
      <SelectButton options={[{ name: '123', value: '123' }]} />
      <Modal isOpen={isOpen} onClose={toggle} />
    </div>
  );
}

export default App;
