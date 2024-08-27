import React from 'react';
import Text from '../Text/Text';
import Link from 'next/link';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Link
      href="https://sassy-cloth-fbe.notion.site/e122a715530f452998b15be52a20689b"
    >
      <StyledText fontType="header" color="black">
        Portfolio
      </StyledText>
    </Link>
  );
};

export default Portfolio;

const StyledText = styled(Text)`
  display: inline-block;
  position: relative;
  color: black;
  text-decoration: none;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    padding 0.3s ease;

  :hover {
    color: ${({ theme }) => (theme.colorMode === 'dark' ? '#fff' : '#000')} !important;
    background-color: ${({ theme }) =>
      theme.colorMode === 'dark'
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(0, 0, 0, 0.1)'} !important;
    border-radius: 5px;
    padding: 5px !important;

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
    background-color: ${({ theme }) => (theme.colorMode === 'dark' ? '#fff' : '#000')};
    transition: width 0.3s ease;
  }
`;
