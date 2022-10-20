import { Icon } from '../Icon';

import { ReactComponent as facebookIcon } from '@/assets/svg/socials/icon_facebook.svg';
import { ReactComponent as twitterIcon } from '@/assets/svg/socials/icon_twitter.svg';
import { ReactComponent as linkedinIcon } from '@/assets/svg/socials/icon_linkedin.svg';
import { ReactComponent as youtubeIcon } from '@/assets/svg/socials/icon_youtube.svg';
import { ReactComponent as dribbbleIcon } from '@/assets/svg/socials/icon_dribbble.svg';
import { ReactComponent as behanceIcon } from '@/assets/svg/socials/icon_behance.svg';

import { SocialItem, SocialsContainer } from './styled';

const s = [facebookIcon, twitterIcon, linkedinIcon, youtubeIcon, dribbbleIcon, behanceIcon];

export const Socials = () => {
  return (
    <SocialsContainer>
      {s.map((el, index) => {
        return (
          <SocialItem key={index}>
            <a href="#">
              <Icon icon={el} />
            </a>
          </SocialItem>
        );
      })}
    </SocialsContainer>
  );
};
