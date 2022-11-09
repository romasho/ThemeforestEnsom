import { FC } from 'react';

import { TabContainer, Tab } from './styled';

interface TabProps {
  firstHandler: () => void;
  secondHandler: () => void;
  currentValue: string;
}

export const Tabs: FC<TabProps> = ({ firstHandler, secondHandler, currentValue }) => {
  return (
    <TabContainer>
      <Tab isActive={currentValue === 'Month'} onClick={firstHandler}>
        Mo
      </Tab>
      <Tab isActive={currentValue === 'Year'} onClick={secondHandler}>
        Yr
      </Tab>
    </TabContainer>
  );
};
