import { Circles } from 'react-loader-spinner';

import { theme } from '@/theme';

const LOADER_SIZE = 100;

export default () => {
  return <Circles color={theme.colors.primary} height={LOADER_SIZE} width={LOADER_SIZE} />;
};
