import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AlignToCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  color: unset;
  text-decoration: none;
`;
