import styled from 'styled-components';

import { Section } from '@/layouts/Section';
import img2 from '@/assets/img/02_img_10.png';

export const BackgroundHalfSection = styled(Section)`
  background-image: url(${img2});
  height: 740px;
  width: 48vw;
  margin-right: 45px;
  background-position-x: left;
  background-repeat: no-repeat;
`;
