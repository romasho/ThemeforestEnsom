import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { InfoBlock, InfoBlockWrapper, NewsContainer, Quotes } from '../styled';
import { PostProps } from '../types';

import { Icon } from '@/components/Icon';
import { Paragraph } from '@/components/Paragraph';
import { ReactComponent as calendar } from '@/assets/svg/icon_calendar.svg';
import { ReactComponent as person } from '@/assets/svg/icon_person.svg';
import { ReactComponent as view } from '@/assets/svg/icon_data_line.svg';
import { ReactComponent as share } from '@/assets/svg/icon_share.svg';
import { ReactComponent as tag } from '@/assets/svg/icon_tag.svg';
import { theme } from '@/theme';
import { Socials } from '@/components/Socials';
import { Headline } from '@/components/Headline';
import { Tag } from '@/components/Tag';

export const CurrentNews: FC<PostProps> = ({ post }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const { img, date, author, headline, views, tags, blogText } = post;
  return (
    <NewsContainer>
      <img src={img} alt="news_img" />
      <InfoBlockWrapper>
        <InfoBlock>
          <Icon icon={calendar} />
          <Paragraph size="p3">{date}</Paragraph>
        </InfoBlock>
        <InfoBlock>
          <Icon icon={person} />
          <Paragraph size="p3">{author}</Paragraph>
        </InfoBlock>
      </InfoBlockWrapper>
      <Headline size="h3">{headline}</Headline>
      {blogText.map((el, index) =>
        el.paragraph ? (
          <Paragraph size={isDesktopOrLaptop ? 'p3' : 'p2'} color={theme.colors.grey} key={index}>
            {el.paragraph}
          </Paragraph>
        ) : (
          <Quotes key={index}>{el.quotes}</Quotes>
        )
      )}
      <InfoBlockWrapper>
        <InfoBlock>
          <Icon icon={view} />
          <Paragraph size="p3">{views} Views</Paragraph>
        </InfoBlock>
        <InfoBlock>
          <Icon icon={share} />
          <Paragraph size="p3">Share:</Paragraph>
          <Socials
            socials={{
              facebook: undefined,
              twitter: undefined,
              linkedin: undefined,
              youtube: undefined,
              dribbble: undefined,
            }}
            small
          />
        </InfoBlock>
        <InfoBlock>
          {!isDesktopOrLaptop && (
            <>
              <Icon icon={tag} />
              <Paragraph size="p3">Tags:</Paragraph>
            </>
          )}
          {tags.map((el, index) => (
            <Tag key={index}>{el}</Tag>
          ))}
        </InfoBlock>
      </InfoBlockWrapper>
    </NewsContainer>
  );
};
