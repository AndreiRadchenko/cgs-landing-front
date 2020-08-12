import * as yup from 'yup';

/* Registration Validation Schema */
export const fullNameSchema = yup
  .string()
  .trim()
  .nullable(true)
  .min(3, 'Full name to short.')
  .max(50, 'Full name to long.')
  .required('Please enter your full name.');

export const emailSchema = yup
  .string()
  .trim()
  .nullable(true)
  .email('Please enter a valid email address.')
  .required('Please enter your email.');

export const messageSchema = yup
  .string()
  .trim()
  .nullable(true)
  .min(10, 'Please, Describe your thoughts complicatable');

export const registrationFormSchema = yup.object().shape({
  name: fullNameSchema,
  email: emailSchema,
  message: messageSchema,
});
