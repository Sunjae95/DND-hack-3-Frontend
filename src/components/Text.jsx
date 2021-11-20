import React from 'react';

const Text = ({ value, ...props }) => {
  return (
    <div {...props}>
      <span>{value}</span>
    </div>
  );
};

export default Text;
