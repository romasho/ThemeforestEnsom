import { FC, useState } from 'react';

import { Icon } from '@/components/Icon';
import { ReactComponent as minus } from '@/assets/svg/icon_minus.svg';
import { ReactComponent as plus } from '@/assets/svg/icon_plus.svg';
import { Headline } from '@/components/Headline';
import { Paragraph } from '@/components/Paragraph';
import { theme } from '@/theme';

import { ListWrapper, QuestionWrapper, Button, Animation } from './styled';

interface DropDownListProps {
  question: string;
  answer: string;
}

export const DropDownList: FC<DropDownListProps> = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <ListWrapper onClick={handleClick}>
      <QuestionWrapper>
        <Headline size="h4" color={isOpen ? theme.colors.primary : theme.colors.black}>
          {question}
        </Headline>
        <Button open={isOpen}>
          <Icon icon={isOpen ? minus : plus} />
        </Button>
      </QuestionWrapper>
      {isOpen && (
        <Animation>
          <Paragraph size="p1" color={theme.colors.grey}>
            {answer}
          </Paragraph>
        </Animation>
      )}
    </ListWrapper>
  );
};
