import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TextareaFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  ::placeholder {
    color: gray;
  }
`;

const LimitText = styled.span`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const TextareaField = ({ size, onChange }) => {
  return (
    <TextareaFieldWrapper>
      <Textarea
        placeholder="(필수)내용을 작성해주세요."
        onChange={onChange}
      ></Textarea>
      <LimitText>{size}/500</LimitText>
    </TextareaFieldWrapper>
  );
};

TextareaField.propTypes = {
  text: PropTypes.number,
  onChange: PropTypes.func,
};

export default TextareaField;
