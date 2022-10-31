import { FC } from 'react';

import { Icon } from '../Icon';

import { ReactComponent as facebookIcon } from '@/assets/svg/socials/icon_facebook.svg';
import { ReactComponent as twitterIcon } from '@/assets/svg/socials/icon_twitter.svg';
import { ReactComponent as linkedinIcon } from '@/assets/svg/socials/icon_linkedin.svg';
import { ReactComponent as youtubeIcon } from '@/assets/svg/socials/icon_youtube.svg';
import { ReactComponent as dribbbleIcon } from '@/assets/svg/socials/icon_dribbble.svg';
import { ReactComponent as behanceIcon } from '@/assets/svg/socials/icon_behance.svg';

import { SocialItem, SocialsContainer } from './styled';

const s = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  linkedin: linkedinIcon,
  youtube: youtubeIcon,
  dribbble: dribbbleIcon,
  behance: behanceIcon,
};

interface SocialsProps {
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    dribbble?: string;
    behance?: string;
  };
}

export const Socials: FC<SocialsProps> = ({ socials }) => {
  const { facebook, twitter, linkedin, youtube, dribbble, behance } = socials;

  Object.keys(socials).map;

  return (
    <SocialsContainer>
      {(Object.keys(socials) as Array<keyof typeof socials>).map((el, index) => {
        return (
          <SocialItem key={index}>
            <a href={socials[el]}>
              <Icon icon={s[el]} />
            </a>
          </SocialItem>
        );
      })}
    </SocialsContainer>
  );
};
