import { FC } from 'react';

import video from '@/assets/video/video.mp4';

import { Video } from './styled';

interface VideoPlayerProps {
  open: boolean;
  player: React.MutableRefObject<null>;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ open, player }) => {
  const render = open ? <Video src={video} width="750" height="500" controls ref={player} /> : null;
  return render;
};
