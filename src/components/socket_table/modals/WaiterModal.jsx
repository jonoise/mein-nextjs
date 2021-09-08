import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
  HStack,
  Stack,
  Button,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react'
import { AiOutlineBell } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { useRef, useState } from 'react'

const NameModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const firstField = useRef()

  const onOpen = () => {
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        leftIcon={<AiOutlineBell />}
        colorScheme="blue"
        onClick={onOpen}
        size="sm"
        shadow="md"
      >
        Mesero
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        initialFocusRef={firstField}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg={styles.dimWhite} color="black">
          <DrawerHeader borderBottomWidth="1px" borderColor="black">
            <Flex w="full" justify="space-between">
              <Text>Solicitar mesero.</Text>
              <Button onClick={onClose}>
                <FaTimes />
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <VStack spacing="1">
                <Image src="/restaurant/campana.png" w="240px" />
              </VStack>
              <Stack fontSize="16px">
                <Text color={styles.black}>
                  Nuestro equipo de meseros está capacitado para responder
                  cualquier duda que tengas. 😊
                </Text>
              </Stack>
              <VStack>
                <Text>Deseas llamar un mesero?</Text>
              </VStack>
              <HStack w="full">
                <Button colorScheme="green" w="full">
                  Sí
                </Button>
                <Button colorScheme="red" w="full" onClick={onClose}>
                  No
                </Button>
              </HStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NameModal

const styles = {
  yellow: '#f5c000',
  blue: '#5267f6',
  green: '#6afdef',
  purple: '#8d2ef0',
  red: '#ec7965',
  black: '#1a1a1a',
  dimWhite: '#f2f2f2',
}
