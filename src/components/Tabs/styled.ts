import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92px;
  height: 32px;
`;

type TabProps = {
  isActive: boolean;
};

export const Tab = styled.button<TabProps>`
  display: flex;
  border: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 41px;
  height: 32px;
  color: ${(props) => props.theme.colors.white};
  font: ${(props) => props.theme.font.headline.headline7};
  background: ${(props) =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.colors.white +
        `;
        border: 1px solid ${props.theme.colors.primary};
        color: ${props.theme.colors.primary};`};
  border-radius: 6px;
`;
