import {
  Divider,
  Input,
  Image,
  VStack,
  Flex,
  Text,
  HStack,
  Tooltip,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import DefaultHead from '../components/head/DefaultHead'
import { colors as color, colors } from '../constants'
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
          <Footer />
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
          placeholder="ingresa tu email"
          bg={color.black}
          color={colors.white}
          border="none"
          className="disableFocus"
          rounded="full"
          p="5"
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
          cursor="pointer"
        >
          Sí, quiero saber! 😊
        </Flex>
      </Flex>
      <Text fontSize="xs" fontWeight="hairline" pt="2">
        Los usuarios que rellenen su correo electrónico en esta fase, <br />{' '}
        recibirán un cupón que equivale a 2 MESES GRATIS en el plan PRO!
      </Text>
    </>
  )
}

const Footer = () => {
  return (
    <HStack spacing="10" h="full">
      {footerLinks.map((link) => {
        return (
          <Tooltip
            placement="bottom"
            hasArrow
            label={link.label}
            key={link.id}
            bg="pink.500"
          >
            <Text
              as="a"
              href={link.href}
              target="_blank"
              fontSize="x-large"
              color={link.color}
              cursor="pointer"
            >
              {<link.icon />}
            </Text>
          </Tooltip>
        )
      })}
    </HStack>
  )
}

const footerLinks = [
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/meincr',
    icon: FaTwitter,
    color: 'twitter.700',
  },
  {
    id: 'ingragram',
    label: 'Instagram',
    href: 'https://instagram.com/mein.cr',
    icon: FaInstagram,
    color: 'pink.800',
  },
]
