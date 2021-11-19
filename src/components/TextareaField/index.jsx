import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors } from '@assets/colors';

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  border: 1px solid ${colors.opacityDark};
  box-sizing: border-box;
  border-radius: 8px;
  resize: none;
  outline: none;
  overflow: hidden;
  ::placeholder {
    color: ${colors.opacityDark};
  }
`;

const TextareaField = ({ onChange }) => {
  return <Textarea placeholder="필수 입력" onChange={onChange}></Textarea>;
};

TextareaField.propTypes = {
  onChange: PropTypes.func,
};

export default TextareaField;
