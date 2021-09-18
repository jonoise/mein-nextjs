import {
  Divider,
  Input,
  Image,
  VStack,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'
import DefaultHead from '../components/head/DefaultHead'
import { colors as color } from '../constants'
export default function Home() {
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
          <Text fontSize="18px">Estamos trabajando para trarte Mein</Text>
          <Text>
            Una manera más dinámica de entregar un menú digital, donde los
            clientes son participantes e interactúan entre ellos, tu cocina, tus
            meseros y tu restaurante.
          </Text>
          <Divider />
          <EmailInput />
        </VStack>
      </Flex>
    </>
  )
}

const EmailInput = () => {
  return (
    <>
      <Text fontSize="sm" fontWeight="normal">
        ¿Te gustaría recibir un email cuando tengamos todo listo?
      </Text>
      <Flex>
        <Input
          placeholder="ingresa tu correo electrónico"
          border="1px solid black"
          bg={color.white}
          className="removeFocus"
        />
        <Flex
          w="250px"
          wordBreak=""
          bg="white"
          justify="center"
          align="center"
          rounded="full"
          ml="-10"
          zIndex="3"
        >
          Sí, quiero saber! 😊
        </Flex>
      </Flex>
      <Text fontSize="xs" fontWeight="hairline" pt="2">
        Los que rellenen su correo electrónico en esta fase, <br /> recibirán un
        cupón que equivale a 2 meses GRATIS!
      </Text>
    </>
  )
}
