import { TabContainer, Tab } from './styled';

export const Tabs = ({ first, second, current }) => {
  return (
    <TabContainer>
      <Tab isActive={current === 'Month'} onClick={first}>
        Mo
      </Tab>
      <Tab isActive={current === 'Year'} onClick={second}>
        Yr
      </Tab>
    </TabContainer>
  );
};
