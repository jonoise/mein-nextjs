import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Collapse,
  Stack,
  Link,
  Heading,
  Button,
} from '@chakra-ui/react'
import SessionButton from '../buttons/SessionButton'
import Image from 'next/image'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { handleQueryMessage } from './handleMessage'
import { FaTimes } from 'react-icons/fa'

const NAV_ITEMS = ['HOME', 'REGISTER', 'TEST']

const Navbar = () => {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  const [blackBg, setBlackBg] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    // Check query for errors
    handleQueryMessage(router.asPath, setMessage)
  }, [setMessage])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        setBlackBg(true)
      } else {
        if (isOpen) {
          return
        } else {
          setBlackBg(false)
        }
      }
    })
  }, [])

  return (
    <>
      <Flex
        position="fixed"
        zIndex="10"
        minH="60px"
        direction="column"
        w="full"
      >
        {message && (
          <DisplayMessage setMessage={setMessage}>{message}</DisplayMessage>
        )}

        <Flex
          px={{ base: '5', lg: '40' }}
          py="2"
          w="full"
          transition=".4s all"
          bg={blackBg ? '#1a1a1a' : null}
        >
          <Flex justify="space-between" w="full" align="center">
            <Heading>Navbar</Heading>
            <Flex
              flex={{ base: 'full', lg: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', lg: 'none' }}
            >
              <IconButton
                color="#1a1a1a"
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
                _hover={{ bg: '#1a1a1a' }}
              />
            </Flex>
            <Menubar NAV_ITEMS={NAV_ITEMS} blackBg={blackBg} />
            <Flex
              position="absolute"
              top="60px"
              left="0"
              w="full"
              minH="100vh"
              transition=".5s all"
              bg={'#fff2bc'}
              opacity={isOpen ? '1' : '0'}
              color="#1a1a1a"
              justify="center"
              display={isOpen ? 'block' : 'none'}
            >
              <Collapse in={isOpen} animateOpacity>
                <MobileNav NAV_ITEMS={NAV_ITEMS} />
              </Collapse>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Navbar

const Logo = () => {
  return (
    <Box w={{ base: '220px', lg: '350px' }}>
      <Image src="/svgs/arcoeeres_banner.svg" width="100" height="75" />
      {/* <Image src="https://user-images.githubusercontent.com/71573508/130567876-96301de4-4511-4ffb-8c07-cac75cb8c027.png" /> */}
    </Box>
  )
}

const Menubar = ({ NAV_ITEMS }) => {
  return (
    <HStack
      fontFamily="Montserrat"
      fontWeight="700"
      spacing="12"
      fontSize="14px"
      color="#1a1a1a"
      display={{ base: 'none', lg: 'flex' }}
    >
      {NAV_ITEMS.map((navItem, key) => (
        <Link key={key} href={`${navItem.split(' ').join('-').toLowerCase()}`}>
          <Text>{navItem}</Text>
        </Link>
      ))}
      <SessionButton />
    </HStack>
  )
}

const MobileNav = ({ NAV_ITEMS }) => {
  return (
    <Stack
      p={10}
      display={{ lg: 'none' }}
      textAlign="center"
      justify="center"
      align="center"
      fontSize="35px"
      spacing="5"
    >
      {NAV_ITEMS.map((navItem, key) => (
        <Link key={key} href={`${navItem.split(' ').join('-').toLowerCase()}`}>
          <Text>{navItem}</Text>
        </Link>
      ))}
      <SessionButton />
    </Stack>
  )
}

const DisplayMessage = ({ setMessage, children }) => {
  const [showMessage, setShowMessage] = useState(false)
  const [displayMessage, setDisplayMessage] = useState(false)

  useEffect(() => {
    const showMessageTimeout = setTimeout(() => {
      setShowMessage(true)
    }, 700)
    return () => clearTimeout(showMessageTimeout)
  }, [])

  useEffect(() => {
    const displayMessage = setTimeout(() => {
      setDisplayMessage(true)
    }, 1200)
    return () => clearTimeout(displayMessage)
  }, [])

  const closeError = () => {
    setMessage(null)
  }

  return (
    <Flex
      px={{ base: '5', lg: '40' }}
      py={'0'}
      w="full"
      minH={showMessage ? '30px' : '0px'}
      transition=".5s ease"
      bg="red.300"
      justify="center"
      align="center"
    >
      <Flex
        h={displayMessage ? '30px' : '0px'}
        opacity={displayMessage ? 1 : 0}
        transition="1s all"
        w="full"
        justify="space-between"
        align="center"
        fontWeight="bold"
        color="black"
      >
        <Text>{children}</Text>
        <Flex
          color="#1a1a1a"
          display={displayMessage ? 'block' : 'none'}
          transition=".3s all"
          _hover={{ color: 'white' }}
          onClick={closeError}
          cursor="pointer"
        >
          <FaTimes />
        </Flex>
      </Flex>
    </Flex>
  )
}
