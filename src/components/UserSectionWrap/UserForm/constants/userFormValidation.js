import { object, string, date } from 'yup';

export const userFormValidation = object({
  userName: string()
    .required('Please enter your name')
    .min(3, 'Too short!')
    .max(16, 'Too long!'),
  birthday: date(),
  email: string()
    .required('Please enter your email.')
    .matches(
      /^([a-z0-9_.-]+)@([a-z09_.-]+).([a-z]{2,6})$/,
      'Email is not valid.'
    ),
  skype: string().max(16),
  phone: string().max(19, 'Phone must include 10 numbers'),
  avatarUrl: string(),
});

// /^([+]?[0-9])*$/i;
