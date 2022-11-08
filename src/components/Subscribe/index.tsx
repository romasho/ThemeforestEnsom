import { memo, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { SubscribeContainer } from '@/layouts/Container';
import { SectionWithBorder } from '@/layouts/Section';
import { BaseBlock } from '@/pages/Home/styled';
import { emailJs } from '@/constants/email';
import { schemaShort } from '@/schema';

import { Input, Button, Form } from './styled';

type IFormData = {
  email: string;
};

export const Subscribe = memo(() => {
  const form = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schemaShort),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUseNativeValidation: true,
  });

  function onSubmit() {
    if (form.current) {
      emailjs.sendForm(emailJs.serviceID, emailJs.templateID, form.current, emailJs.publicKey);
    }
    reset();
  }

  return (
    <SectionWithBorder background="secondary">
      <SubscribeContainer>
        <BaseBlock>
          <Headline as="h2" size={isMobile ? 'h3' : 'h2'}>
            Subscribe to our newsletter
          </Headline>
          {!isMobile && (
            <Paragraph size="p1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </Paragraph>
          )}
        </BaseBlock>
        <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Your email" {...register('email')} name="email" />
          <Button type="submit">Send</Button>
        </Form>
      </SubscribeContainer>
    </SectionWithBorder>
  );
});
