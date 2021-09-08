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
import { FaDollarSign, FaTimes } from 'react-icons/fa'
import { useRef, useState } from 'react'

const TipModal = () => {
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
        leftIcon={<FaDollarSign />}
        colorScheme="blue"
        onClick={onOpen}
        size="sm"
        shadow="md"
      >
        <Text>Tip</Text>
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
              <Text>Dejar propina.</Text>
              <Button onClick={onClose}>
                <FaTimes />
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <VStack spacing="1">
                <Image src="/restaurant/corazones.png" w="240px" />
              </VStack>
              <Stack fontSize="16px">
                <Text color={styles.black}>
                  Disfrutaste la atención que recibiste y quieres dejarlo saber?
                  Puedes optar por incluir una propina en tu cuenta para el/la
                  meser@ que te atendió. 😊
                </Text>
              </Stack>

              <HStack w="full">
                <Button colorScheme="green" w="full">
                  Dejar propina. 🥰
                </Button>
                <Button colorScheme="red" w="full" onClick={onClose}>
                  Salir
                </Button>
              </HStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default TipModal

const styles = {
  yellow: '#f5c000',
  blue: '#5267f6',
  green: '#6afdef',
  purple: '#8d2ef0',
  red: '#ec7965',
  black: '#1a1a1a',
  dimWhite: '#f2f2f2',
}
