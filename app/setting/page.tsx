import { Box, Center, Flex, Stack, Tag } from '@chakra-ui/react';
import { AmountInput } from '../components/AmountInput';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Page() {
  return (

      <Flex direction="column" h="100vh">
        <Box as="header">
          <Header />
        </Box>


        <Box as="footer" p={4}>
          <Footer/>
        </Box>
      </Flex>
  )
}