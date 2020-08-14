import React from 'react';
import * as Styled from './textarea.styles';
import { ITextArea } from '../../../../types/components/index';

const Textarea: React.FC<ITextArea> = ({
  placeholder,
  name,
  onChange,
  value,
  errors,
}) => {
  return (
    <Styled.TextWrapper>
      <Styled.Text
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        // onBlur={onBlur}
        // errors={props.errors}
        // touched={touched}
      />
      <Styled.Error>{name && errors?.[name]}</Styled.Error>
    </Styled.TextWrapper>
  );
};
export default Textarea;
