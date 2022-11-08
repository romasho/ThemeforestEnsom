import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email format !')
    .required('Email is required please !'),
  name: yup.string().required('Name is required please !'),
  theme: yup.string().required('Theme is required please !'),
  message: yup
    .string()
    .min(4, 'Message must contain at least 4 characters')
    .required('Message is required please !'),
});

export const schemaShort = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email format !')
    .required('Email is required please !'),
});
