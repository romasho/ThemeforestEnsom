import { useMediaQuery } from 'react-responsive';

import { Link, Service } from '@/constants';

import { ContactContainer, FooterHeadline, NavigationLink, ContactLink } from './styled';

export const ContactsDesktop = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const render = isMobile ? null : (
    <>
      <ContactContainer>
        <FooterHeadline>Quick link</FooterHeadline>
        {Link.map(({ name, link }) => (
          <NavigationLink key={name} to={link}>
            {name}
          </NavigationLink>
        ))}
      </ContactContainer>
      <ContactContainer>
        <FooterHeadline>Service</FooterHeadline>
        {Service.map(({ name, link }) => (
          <NavigationLink key={name} to={link}>
            {name}
          </NavigationLink>
        ))}
      </ContactContainer>
      <ContactContainer>
        <FooterHeadline>Contact info</FooterHeadline>
        <ContactLink href="mailto:ensome@info.co.us">ensome@info.co.us</ContactLink>
        <ContactLink href="tel:+1 601-201-5580">+1 601-201-5580</ContactLink>
        <ContactLink>
          1642 Washington Avenue, Jackson,
          <br /> MS, Mississippi, 39201
        </ContactLink>
      </ContactContainer>
    </>
  );
  return render;
};
