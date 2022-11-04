import { FC, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <ListWrapper onClick={handleClick}>
      <QuestionWrapper>
        <Headline
          size={isMobile ? 'h6' : 'h4'}
          color={isOpen ? theme.colors.primary : theme.colors.black}
        >
          {question}
        </Headline>
        <Button open={isOpen}>
          <Icon icon={isOpen ? minus : plus} />
        </Button>
      </QuestionWrapper>
      {isOpen && (
        <Animation>
          <Paragraph size={isMobile ? 'p3' : 'p1'} color={theme.colors.grey}>
            {answer}
          </Paragraph>
        </Animation>
      )}
    </ListWrapper>
  );
};
