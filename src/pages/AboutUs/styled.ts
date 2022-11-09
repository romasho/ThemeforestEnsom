import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { WithoutPaddingContainer } from '@/layouts/Container/index';
import { BackgroundSection as BSection } from '@/pages/Home/Information/styled';
import { Section } from '@/layouts/Section';

export const BackgroundSection = styled(BSection)`
  background-position: center;
  transform: scale(-1, 1);
  margin-top: 120px;

  @media (max-width: 450px) {
    margin-top: 30px;
    height: 210px;
    background-size: 450px;
  }
`;

export const WrapSection = styled(Section)`
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: unset;
  display: flex;
  justify-content: center;
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: -20px;
  justify-content: space-between;

  @media (max-width: 450px) {
    margin-bottom: 0;
  }
`;

export const ControlsWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;

export const ImgWrapper = styled(WithoutPaddingContainer)`
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  gap: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-top: 50px;
    img {
      width: 92px;
      height: 65px;
    }
  }
`;
