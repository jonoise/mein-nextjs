import {
  Divider,
  Input,
  Image,
  VStack,
  Flex,
  Text,
  HStack,
  Tooltip,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import DefaultHead from '../components/head/DefaultHead'
import { colors as color, colors } from '../constants'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { useState } from 'react'
const url =
  'https://meincr.us5.list-manage.com/subscribe/post?u=8b3e2921db60e3a06e3a0054a&amp;id=f2babc303f'

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
          <Suscriber />
          <Footer />
        </VStack>
      </Flex>
    </>
  )
}

const Suscriber = (props) => {
  return (
    <MailchimpSubscribe
      url={url}
      render={(props) => {
        const { subscribe, status, message } = props
        return (
          <SuscribeForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )
      }}
    />
  )
}

const SuscribeForm = ({ status, message, onValidated }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  let validateEmail = /\S+@\S+\.\S+/

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)
    const validEmail = validateEmail.test(email)

    if (!email || email.length < 1) {
      setError('Ingresa tu correo 😉')
      setLoading(false)

      return null
    }

    if (!validEmail) {
      setError('Ingresa un correo válido 😉')
      setLoading(false)
      return null
    }

    const isFormValidated = await onValidated({ EMAIL: email })
    return email && email.indexOf('@') > -1 && isFormValidated
  }

  const handleKeyInput = (e) => {
    setError(null)
    if (e.target.keyCode === 13) {
      e.preventDefault()
      handleSubmit()
    }
    return null
  }

  const handleRedirect = () => {
    router.push('/gracias')
  }

  const handleFormError = () => {
    setError(null)
    setLoading(false)
  }

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
          onChange={(e) => setEmail(e.target.value)}
          onKeyUp={(e) => handleKeyInput(e)}
          type="email"
        />
        <Button
          w="250px"
          wordBreak=""
          bg="white"
          justify="center"
          align="center"
          rounded="full"
          ml="-10"
          zIndex="3"
          onClick={(e) => handleSubmit(e)}
          isLoading={loading}
          _loading={{ bg: 'white', opacity: 1 }}
        >
          Sí, quiero saber! 😊
        </Button>
      </Flex>
      {error && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}
      {status === 'error' && (
        <div
          onChange={handleRedirect()}
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: 'Ya estás inscrito en la lista!' }}
        />
      )}
      {status === 'success' && (
        <div onChange={handleRedirect()} style={{ color: 'green' }}>
          Subscribed !
        </div>
      )}
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
