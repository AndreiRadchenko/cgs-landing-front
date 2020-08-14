import React from 'react';
import { Formik } from 'formik';
import * as Styled from './form.styles';
import Input from '../Input/input.commponent';
import Textarea from '../Textarea/textarea.component';
import Button from '../Button/button.component';
import { registrationFormSchema } from '../../../../helpers/validation';
import { sendFormEA } from '../../../../services/event';
import mailgun from 'mailgun-js';
//Change APIKEY
const DOMAIN = 'sandboxe95adc3c72384cb7846b08665716864f.mailgun.org';
const mg = mailgun({
  // apiKey: '',
  domain: DOMAIN,
});

const Form = () => {
  return (
    <Formik
      validationSchema={registrationFormSchema}
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={async values => {
        sendFormEA(values);
        //CHANGE EMAIL
        await mg.messages().send({
          from: `${values.name} <${values.email}>`,
          to: '',
          subject: 'Contacts',
          text: values.message,
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldTouched,
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
