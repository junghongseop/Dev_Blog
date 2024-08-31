'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Footer />
    </ChakraProvider>
  );
}
