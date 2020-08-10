import React from 'react';
import * as Styled from './textarea.styles';

const Textarea = props => {
  return (
    <Styled.TextWrapper>
      <Styled.Text placeholder={props.placeholder} name={props.name} />
      <Styled.Error>{props.error}</Styled.Error>
    </Styled.TextWrapper>
  );
};
export default Textarea;
