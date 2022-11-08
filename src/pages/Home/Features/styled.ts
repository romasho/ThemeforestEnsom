import styled from 'styled-components';

import { BaseBlock } from '@/pages/Home/styled';
import { Section } from '@/layouts/Section';
import { Container } from '@/layouts/Container';

interface BackgroundHalfSectionProps {
  img: string;
}

export const BackgroundHalfSection = styled(Section)<BackgroundHalfSectionProps>`
  background-image: url(${({ img }) => img});
  height: 740px;
  width: 48vw;
  margin-right: 45px;
  background-position-x: left;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100vw;
    height: 180px;
    background-position: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled(Container)`
  padding: 40px 0 20px 0;
`;

export const StyledBaseBlock = styled(BaseBlock)`
  margin-bottom: 50px;
`;
