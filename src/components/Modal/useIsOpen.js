import { useState } from 'react';

export function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, toggle };
}
