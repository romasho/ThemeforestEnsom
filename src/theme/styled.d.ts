import 'styled-components';

import { boxShadowsType, paletteType, fontType } from '.';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadows: boxShadowsType;
    colors: paletteType;
    spaces: number[];
    fontSizes: number[];
    font: fontType;
  }
}
