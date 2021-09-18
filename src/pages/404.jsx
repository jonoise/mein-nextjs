import { Link, Flex, VStack, Image, Text } from '@chakra-ui/react'
import DefaultHead from '../components/head/DefaultHead'
import { colors as color } from '../constants'
const test = () => {
  return (
    <>
      <DefaultHead title="Mein Menu">
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </DefaultHead>

      <Flex
        justify="center"
        align="center"
        w="full"
        minH="100vh"
        bg={color.yellow}
        px={{ base: 2, lg: 5 }}
      >
        <VStack
          color={color.black}
          maxW="500px"
          textAlign="center"
          fontWeight="semibold"
        >
          <Image src={'/logo.svg'} w="300px" />
          <Text fontSize="18px">OOPS! Parece que esta página no existe 🤷‍♀️</Text>
          <Text fontSize="18px">
            Lo mejor será buscar una{' '}
            <Link color="red.500" href="/">
              ruta de vuelta.
            </Link>
          </Text>
        </VStack>
      </Flex>
    </>
  )
}

export default test
