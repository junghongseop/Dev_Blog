import React from 'react';
import Text from '../Text/Text';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Text fontType="header" color="black">
        Luka.
      </Text>
    </Link>
  );
};

export default Logo;
