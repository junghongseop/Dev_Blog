import React from 'react';
import Text from '../Text/Text';
import Link from 'next/link';
import { useColorModeValue } from '@chakra-ui/react';

const Logo = () => {
  const textColor = useColorModeValue('black', 'white');
  const hoverBgColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');

  return (
    <Link href="/">
      <Text fontType="header" color={textColor} hoverBgColor={hoverBgColor}>
        Luka.
      </Text>
    </Link>
  );
};

export default Logo;
