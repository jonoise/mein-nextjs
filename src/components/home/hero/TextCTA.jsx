import { Flex, Input, Text, VStack } from '@chakra-ui/react'

const TextCTA = () => {
  return (
    <VStack
      p="5"
      align="start"
      maxW={{ base: '100%', '2xl': '50%' }}
      justify="center"
      spacing="7"
    >
      <Text fontFamily="Raleway, sans-serif" fontSize="sm" fontWeight="800">
        UNA MEJOR MANERA DE SERVIR
      </Text>
      <Text
        fontSize="5xl"
        fontFamily="Yeseva One, cursive"
        letterSpacing="tighter"
        lineHeight="1.2"
      >
        Dale a tus clientes el mejor menú digital y conviértelos en fans
      </Text>
      <Text fontWeight="600" fontSize="x-large">
        Agiliza los pedidos de tu negocio y entrega ordenes perfectas con menús
        digitales.
      </Text>
      <Flex justify="center" align="center" h="3rem">
        <input
          className="InputFront"
          type="text"
          placeholder="Your email address"
        />
        <button className="ButtonFront">Get Started</button>
      </Flex>
    </VStack>
  )
}

export default TextCTA
