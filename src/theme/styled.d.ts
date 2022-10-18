import 'styled-components';

import { boxShadowsType, paletteType } from '.';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadows: boxShadowsType;
    colors: paletteType;
    spaces: number[];
    fontSizes: number[];
  }
}
