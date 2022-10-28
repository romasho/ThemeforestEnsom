import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { BackgroundSection as Section } from '@/components/Information/styled';

export const BackgroundSection = styled(Section)`
  background-position: center;
  transform: scale(-1, 1);
  margin-top: 120px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: unset;
`;

export const HeadlineWrapper = styled.span`
  width: 100%;
  margin-bottom: -20px;
`;

export const ControlsWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
  padding-top: 120px;
`;
