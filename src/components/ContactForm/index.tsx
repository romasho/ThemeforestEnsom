import { useForm } from 'react-hook-form';

import { Buttons } from '../Button';

import { FormWrapper, InputElement } from './styled';

type IFormData = {
  email: string;
  name: string;
  theme: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  function onSubmit(data: IFormData) {
    console.log(data);
    reset();
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputElement placeholder="Your email" {...register('email')} />
      <InputElement placeholder="Your name" {...register('name')} />
      <InputElement fullWidth placeholder="Theme" {...register('theme')} />
      <InputElement
        as="textarea"
        fullWidth
        variant="textarea"
        placeholder="Your message"
        {...register('message')}
      />
      <Buttons variant="little" onClick={handleSubmit(onSubmit)}>
        Send
      </Buttons>
    </FormWrapper>
  );
};
