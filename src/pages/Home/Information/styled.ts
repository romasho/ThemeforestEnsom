import styled from 'styled-components';

import { Button } from '../../../components/Button/styled';

import { Section } from '@/layouts/Section';

export const DescriptionWrapper = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.width.middleBlock};
  margin: -50px 0 -30px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin: 0;
  }
`;

export const PositionedButton = styled(Button)`
  position: absolute;
  bottom: -150%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    bottom: -105%;
    right: 5%;
  }
`;

interface BackgroundSectionProps {
  img: string;
}

export const BackgroundSection = styled(Section)<BackgroundSectionProps>`
  background-image: url(${({ img }) => img});
  width: 100%;
  height: 590px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    height: 230px;
  }
`;
