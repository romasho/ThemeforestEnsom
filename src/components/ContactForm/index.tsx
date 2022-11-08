import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Buttons } from '@/components/Button';
import { schema } from '@/schema';
import { emailJs } from '@/constants/email';

import { FormWrapper, InputElement, Error, Label } from './styled';

type IFormData = {
  email: string;
  name: string;
  theme: string;
  message: string;
};

export const ContactForm = () => {
  const form = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  function onSubmit() {
    if (form.current) {
      emailjs.sendForm(emailJs.serviceID, emailJs.templateID, form.current, emailJs.publicKey);
    }
    reset();
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} ref={form}>
      <Label fullWidth={isMobile}>
        <InputElement
          fullWidth={isMobile}
          placeholder="Your email"
          {...register('email')}
          invalid={errors.email ? true : false}
          name="email"
        />
        <Error>{errors.email && errors?.email?.message}</Error>
      </Label>
      <Label fullWidth={isMobile}>
        <InputElement
          fullWidth={isMobile}
          placeholder="Your name"
          {...register('name')}
          name="name"
          invalid={errors.name ? true : false}
        />
        <Error>{errors.name && errors?.name?.message}</Error>
      </Label>
      <Label fullWidth>
        <InputElement
          fullWidth
          placeholder="Theme"
          {...register('theme')}
          name="theme"
          invalid={errors.theme ? true : false}
        />
        <Error>{errors.theme && errors?.theme?.message}</Error>
      </Label>
      <Label fullWidth>
        <InputElement
          as="textarea"
          fullWidth
          variant="textarea"
          placeholder="Your message"
          {...register('message')}
          name="message"
          invalid={errors.message ? true : false}
        />
        <Error>{errors.message && errors?.message?.message}</Error>
      </Label>
      <Buttons variant={isMobile ? 'fill' : 'little'} onClick={handleSubmit(onSubmit)}>
        Send
      </Buttons>
    </FormWrapper>
  );
};
