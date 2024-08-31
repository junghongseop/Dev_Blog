'use client';

import Header from '@/components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}
