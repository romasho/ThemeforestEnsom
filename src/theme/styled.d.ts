import 'styled-components';

import { boxShadowsType, paletteType, fontType, breakPointsType, widthType } from '.';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadows: boxShadowsType;
    colors: paletteType;
    spaces: number[];
    fontSizes: number[];
    font: fontType;
    breakPoints: breakPointsType;
    width: widthType;
  }
}
