import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useColorModeValue } from '@chakra-ui/react';
import Text from '../Text/Text';

const Github = () => {
  const textColor = useColorModeValue('black', 'white');
  const hoverBgColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');

  return (
    <Link href="https://github.com/junghongseop">
      <StyledText fontType="header" color={textColor} hoverBgColor={hoverBgColor}>
        Github
      </StyledText>
    </Link>
  );
};

export default Github;

const StyledText = styled(Text)<{ hoverBgColor: string }>`
  display: inline-block;
  position: relative;
  text-decoration: none;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    padding 0.3s ease;

  :hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
    border-radius: 5px;
    padding: 5px;

    ::after {
      width: 100%;
    }
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: ${({ color }) => color};
    transition: width 0.3s ease;
  }
`;
