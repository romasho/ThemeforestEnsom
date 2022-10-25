import styled from 'styled-components';

import { Section } from '@/layouts/Section';
import img2 from '@/assets/img/02_img_10.png';

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
