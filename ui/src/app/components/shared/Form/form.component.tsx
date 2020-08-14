import React from 'react';
import { Formik } from 'formik';
import * as Styled from './form.styles';
import Input from '../Input/input.commponent';
import Textarea from '../Textarea/textarea.component';
import Button from '../Button/button.component';
import { registrationFormSchema } from '../../../../helpers/validation';
import { sendFormEA } from '../../../../services/event';

const Form = () => {
  return (
    <Formik
      // validate={null}
      validationSchema={registrationFormSchema}
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={values => {
        sendFormEA(values);
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,

        isSubmitting,
        validateField,
        setErrors,
      }) => {
        return (
          <Styled.FormWrapper>
            <Input
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              errors={errors}
              touched={touched}
            />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errors={errors}
              touched={touched}
            />
            <Textarea
              placeholder="Enter your message..."
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              errors={errors}
              touched={touched}
            />
            {console.log('touched: ', touched)}
            <Button type="submit" text="Send" onClick={handleSubmit} />
          </Styled.FormWrapper>
        );
      }}
    </Formik>
  );
};
export default Form;
