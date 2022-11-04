import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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

  @media (max-width: 768px) {
    gap: 12px 8px;
    margin-top: 60px;

    a {
      &:nth-child(n) {
        margin-top: 0;
      }

      &:nth-child(2n) {
        margin-top: -60px;
      }

      
  }
`;

interface BackgroundHalfSectionProps {
  img: string;
}

const rotate = keyframes`
    0% {
      opacity: 0;
      transform: translateY(80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;

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
  border-radius: 6px;
  transition: all 0.3s;
  animation: ${rotate} 1s forwards;

  &:hover {
    filter: none;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 220px;
    background-size: cover;
    padding: 6px 15px;
  }
`;

export const Link = styled(NavLink)`
  color: unset;
  text-decoration: none;
`;
