import styled from 'styled-components';

import { Button } from '../Button/styled';

import { Section } from '@/layouts/Section';

export const DescriptionWrapper = styled.div`
  position: relative;
  max-width: 350px;
  margin: -50px 0 -30px 0;
`;

export const PositionedButton = styled(Button)`
  position: absolute;
  bottom: -150%;
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
`;
