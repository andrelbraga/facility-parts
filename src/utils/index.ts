import { useState } from 'react';

export const useFormInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = async (e: any) => {
    const tempValue = await e.currentTarget.value;
    setValue(tempValue);
  };

  return {
    value,
    reset: (newValue: any) => setValue(newValue),
    onIonChange: handleChange,
    onKeyUp: handleChange,
  };
};

export const useSignupFields = () => {
  return [
    {
      id: 'name',
      label: 'Name',
      required: true,
      input: {
        props: {
          type: 'text',
          placeholder: 'Joe Bloggs',
        },
        state: useFormInput(''),
      },
    },
    {
      id: 'email',
      label: 'Email',
      required: true,
      input: {
        props: {
          type: 'email',
          placeholder: 'joe@bloggs.com',
        },
        state: useFormInput(''),
      },
    },
    {
      id: 'password',
      label: 'Password',
      required: true,
      input: {
        props: {
          type: 'password',
          placeholder: '*********',
        },
        state: useFormInput(''),
      },
    },
  ];
};

export const validateForm = (fields: any) => {
  let errors: any[] = [];

  fields.forEach((field: any) => {
    if (field.required) {
      const fieldValue = field.input.state.value;

      if (fieldValue === '') {
        const error = {
          id: field.id,
          message: `Please check your ${field.id}`,
        };

        errors.push(error);
      }
    }
  });

  return errors;
};
