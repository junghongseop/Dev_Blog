import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import Logo from './Logo';
import Portfolio from './Portfolio';
import ThemeToggler from './ThemeToggler';
import Github from './Github';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <Box as={StyledHeader} isSticky={isSticky}>
        <Logo />
        <Navigation>
          <PortfolioItem>
            <Portfolio />
          </PortfolioItem>
          <GithubItem>
            <Github />
          </GithubItem>
          <ThemeItem>
            <ThemeToggler />
          </ThemeItem>
        </Navigation>
      </Box>
    </ChakraProvider>
  );
};

export default Header;

const StyledHeader = styled.div<{ isSticky: boolean; bgColor: string }>`
  overflow: hidden;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 5;
  width: 100%;
  height: 70px;
  max-width: 1350px;
  margin: 0 auto;
  transition:
    box-shadow 0.3s ease,
    background-color 0.3s ease;
  box-shadow: ${({ isSticky }) =>
    isSticky ? '0px 4px 10px rgba(108, 103, 103, 0.1)' : 'none'};
  background-color: ${({ bgColor }) => bgColor};
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const PortfolioItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

const GithubItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const ThemeItem = styled.div`
  display: flex;
  align-items: center;
`;
