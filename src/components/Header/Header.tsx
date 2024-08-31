import { Box, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Portfoilo from './Portfolio';
import Github from './Github';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      overflow="hidden"
      as="header"
      position="fixed"
      top="0"
      display="flex"
      paddingLeft={5}
      paddingRight={5}
      columnGap={4}
      zIndex="5"
      alignItems="center"
      width="100%"
      height="70px"
      transition="box-shadow 0.3s ease"
      shadow={isSticky ? 'sm' : 'none'}
      backgroundColor="white"
      _dark={{
        backgroundColor: 'gray.800',
      }}
    >
      <Logo />
      <Spacer />
      <Portfoilo />
      <Github />
      <ThemeToggler />
    </Box>
  );
};

export default Header;
