import InterWoff from '../assets/fonts/inter/Inter-Regular.woff';
import InterWoff2 from '../assets/fonts/inter/Inter-Regular.woff2';

import InterMediumWoff from '../assets/fonts/inter/Inter-Medium.woff';
import InterMediumWoff2 from '../assets/fonts/inter/Inter-Medium.woff2';

import InterSemiBoldWoff from '../assets/fonts/inter/Inter-SemiBold.woff';
import InterSemiBoldWoff2 from '../assets/fonts/inter/Inter-SemiBold.woff2';

import InterBoldWoff from '../assets/fonts/inter/Inter-Bold.woff';
import InterBoldWoff2 from '../assets/fonts/inter/Inter-Bold.woff2';

import InterExtraBoldWoff from '../assets/fonts/inter/Inter-ExtraBold.woff';
import InterExtraBoldWoff2 from '../assets/fonts/inter/Inter-ExtraBold.woff2';

export const fontFace = (fontName, woff, woff2, fontWeight = 'normal', fontStyle = 'normal') => `
  @font-face {
    font-family: '${fontName}';
    src: url('${woff}') format('woff'),
         url('${woff2}') format('woff2');
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
  }
`;

export const Inter = 'Inter';
export const InterFont = fontFace(Inter, InterWoff, InterWoff2);
export const InterMediumFont = fontFace(Inter, InterMediumWoff, InterMediumWoff2, 500);
export const InterSemiBoldFont = fontFace(Inter, InterSemiBoldWoff, InterSemiBoldWoff2, 700);
export const InterBoldFont = fontFace(Inter, InterBoldWoff, InterBoldWoff2, 'bold');
export const InterExtraBoldFont = fontFace(Inter, InterExtraBoldWoff, InterExtraBoldWoff2, 900);
