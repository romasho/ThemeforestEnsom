import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  tag: string;
  isActive: boolean;
}

export const Tag = styled.span<Partial<Props>>`
  border: 1px solid ${(props) => props.theme.colors.background};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  transition: 0.3s;
  cursor: pointer;
  padding: 3px 11px;
  text-align: center;
  ${(props) =>
    props.isActive
      ? `border: 1px solid ${props.theme.colors.primary};
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};`
      : ''};

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Tags: FC<Props> = ({ tag, isActive }) => {
  return <Tag isActive={isActive}>{tag}</Tag>;
};
