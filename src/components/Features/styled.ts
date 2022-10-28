import styled from 'styled-components';

import { Section } from '@/layouts/Section';

interface BackgroundHalfSectionProps {
  img: string;
}

export const BackgroundHalfSection = styled(Section)<BackgroundHalfSectionProps>`
  background-image: url(${(props) => props.img});
  height: 740px;
  width: 48vw;
  margin-right: 45px;
  background-position-x: left;
  background-repeat: no-repeat;
  background-size: cover;
`;
