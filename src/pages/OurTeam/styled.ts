import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 30px;

  gap: 30px;
  max-width: 1110px;

  a {
    &:nth-child(1) {
      margin-top: 120px;
    }

    &:nth-child(3) {
      margin-top: 120px;
    }

    &:nth-child(3n + 2) {
      margin-top: -120px;
    }

    &:nth-child(2) {
      padding: 0;
      margin: 0;
    }
  }
`;

interface BackgroundHalfSectionProps {
  img: string;
}

export const ImageContainer = styled.div<BackgroundHalfSectionProps>`
  background: linear-gradient(180deg, rgba(40, 50, 66, 0) 26.37%, #283850 103.66%),
    url(${({ img }) => img});
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 25px;
  transition: all 0.3s;

  &:hover {
    filter: none;
    transform: scale(1.05);
  }
`;

export const Link = styled(NavLink)`
  color: unset;
  text-decoration: none;
`;
