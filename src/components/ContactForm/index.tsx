import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

import { Buttons } from '../Button';

import { FormWrapper, InputElement } from './styled';

type IFormData = {
  email: string;
  name: string;
  theme: string;
  message: string;
};

export const ContactForm = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
    reset();
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputElement fullWidth={isMobile} placeholder="Your email" {...register('email')} />
      <InputElement fullWidth={isMobile} placeholder="Your name" {...register('name')} />
      <InputElement fullWidth placeholder="Theme" {...register('theme')} />
      <InputElement
        as="textarea"
        fullWidth
        variant="textarea"
        placeholder="Your message"
        {...register('message')}
      />
      <Buttons variant={isMobile ? 'fill' : 'little'} onClick={handleSubmit(onSubmit)}>
        Send
      </Buttons>
    </FormWrapper>
  );
};
