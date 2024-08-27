import { css } from 'styled-components';

const fontGenerator = (
  fontFamily: string,
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number,
  fontStyle?: string
) => css`
  font-family: '${fontFamily}', sans-serif;
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}%;
  letter-spacing: ${letterSpacing}px;
  font-style: ${fontStyle || 'normal'};
`;

const font = {
  header: fontGenerator('Alumni Sans', 800, 24, 500, 0, 'italic'),
  footer: fontGenerator('Alumni Sans', 100, 15, 18, 0, 'normal'),

  H1: fontGenerator('Alumni Sans', 800, 100, 120, 0, 'italic'),
  H2: fontGenerator('Alumni Sans', 600, 25, 30, 0, 'normal'),

  B1: fontGenerator('Alumni Sans', 800, 30, 36, 0, 'italic'),
  B2: fontGenerator('Alumni Sans', 100, 30, 36, 0, 'italic'),

  category: fontGenerator('Alumni Sans', 600, 20, 24, 0, 'italic'),
};

export default font;
