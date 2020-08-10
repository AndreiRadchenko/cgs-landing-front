import React from 'react';
import * as Styled from './input.styles';

const Input = props => {
  return (
    <Styled.InputWrapper>
      <Styled.Input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
      />
      <Styled.Error>{props.error}</Styled.Error>
    </Styled.InputWrapper>
  );
};

export default Input;
