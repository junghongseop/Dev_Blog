import React from 'react';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import font from './font';

type Font = keyof typeof font;

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties['color'];
  fontType: Font;
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
  ellipsis?: boolean;
  whiteSpace?: CSSProperties['whiteSpace'];
  tag?: 'span' | 'p';
  hoverBgColor?: string;
}

const Text = ({
  children,
  color,
  fontType,
  textAlign,
  width,
  ellipsis = false,
  whiteSpace = 'nowrap',
  tag = 'span',
  hoverBgColor,
}: Props) => {
  return (
    <StyledText
      style={{ color, textAlign, width, whiteSpace }}
      fontType={fontType}
      as={tag}
      ellipsis={ellipsis}
      hoverBgColor={hoverBgColor}
    >
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.span<{
  fontType: Font;
  ellipsis: boolean;
  hoverBgColor?: string;
}>`
  ${({ fontType }) => font[fontType]}
  ${(props) =>
    props.ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${(props) =>
    props.hoverBgColor &&
    css`
      :hover {
        background-color: ${props.hoverBgColor};
        border-radius: 5px;
        padding: 5px;
      }
    `}
`;
