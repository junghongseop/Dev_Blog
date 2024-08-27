import type { IconButtonProps } from '@chakra-ui/react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import IconMoon from '../Icon/IconMoon';
import IconSun from '../Icon/IconSun';


type ThemeModeTogglerProps = Omit<IconButtonProps, 'aria-label'>;

const ThemeToggler: React.FC<ThemeModeTogglerProps> = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(IconMoon, IconSun);

  return (
    <IconButton
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="2xl"
      borderRadius="3xl"
      variant="unstyled"
      onClick={() => toggleColorMode()}
      icon={<SwitchIcon />}
      _hover={{
        bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.200',
      }}
      _active={{ bg: 'transparent' }}
      aria-label="darkmode toggle button"
    />
  );
};

export default ThemeToggler;
