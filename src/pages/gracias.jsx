import { VStack, Heading, Flex, Box, Text } from '@chakra-ui/react'
import { colors as color } from '../constants'
import Lottie from 'lottie-react'
import confettiData from './73862-confetti.json'
const gracias = () => {
  return (
    <Flex
      justify="center"
      align="center"
      w="full"
      minH="100vh"
      bg={color.yellow}
      color={color.black}
      px={{ base: 2, lg: 5 }}
    >
      <VStack maxW="500px">
        <Heading>¡GRACIAS!</Heading>
        <Box maxW="200px">
          <Lottie animationData={confettiData} />
        </Box>
        <Heading fontSize="24px">Yey! Ya formas parte del club. 😄</Heading>
        <Text textAlign="center">
          Realmente es un honor contar con tu presencia desde una etapa tan
          temprana del proyecto. Muchas gracias por tu interés! 💓
        </Text>
      </VStack>
    </Flex>
  )
}

export default gracias
