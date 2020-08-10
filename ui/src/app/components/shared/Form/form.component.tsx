import React from 'react';
import * as Styled from './form.styles';
import Input from '../Input/input.commponent';
import Textarea from '../Textarea/textarea.component';
import Button from '../Button/button.component';

const Form = () => {
  return (
    <Styled.FormWrapper>
      <Input placeholder="Name" type="text" name="name" />
      <Input placeholder="Email" type="email" name="email" />
      <Textarea placeholder="Enter your message..." />
      <Button type="submit" text="Send" />
    </Styled.FormWrapper>
  );
};
export default Form;
