import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors } from '@assets/colors';

const TextareaFieldWrapper = styled.div`
  width: 100%;
  height: 120px;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 8px;
  border: 1px solid ${colors.optacityDark};
  box-sizing: border-box;
  border-radius: 8px;
  resize: none;
  outline: none;
  overflow: hidden;
  ::placeholder {
    color: ${colors.optacityDark};
  }
`;

const TextareaField = ({ onChange }) => {
  return (
    <div style={{ width: '360px' }}>
      <TextareaFieldWrapper>
        <Textarea placeholder="필수 입력" onChange={onChange}></Textarea>
      </TextareaFieldWrapper>
    </div>
  );
};

TextareaField.propTypes = {
  onChange: PropTypes.func,
};

export default TextareaField;
