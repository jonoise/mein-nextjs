import { AddIcon } from '@chakra-ui/icons'
import {
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Button,
  Stack,
  FormLabel,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { useRef, useState } from 'react'
import socket from '../socketConnect'
import useTableStore from '../tableStore'

const NameModal = () => {
  const [userName, setUserName] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const firstField = useRef()
  const instance_uuid = useTableStore((state) => state.instance_uuid)
  const tableNumber = useTableStore((state) => state.tableNumber)

  const users = useTableStore((state) => state.users)
  const addUser = useTableStore((state) => state.addUser)

  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }

  // Se agrega el user al state y al socket server.
  const addUserHandler = () => {
    const newUser = {
      id: socket.id,
      name: userName,
      instance_uuid,
      dishes: [],
      total: 0,
    }

    const exists = users[newUser.id]

    if (exists) {
      setIsOpen(false)
      return
    }

    if (userName.length < 1) {
      return
    }

    addUser(newUser)
    socket.emit('addUser', instance_uuid, newUser)
    setIsOpen(false)
  }

  const onOpen = () => {
    setIsOpen(true)
  }

  return (
    <>
      <IconButton colorScheme="blue" onClick={onOpen} size="sm">
        <AiOutlineUser />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="top"
        initialFocusRef={firstField}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg={styles.dimWhite} color="black">
          <DrawerHeader borderBottomWidth="1px" borderColor="black">
            MESA {tableNumber}
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <VStack spacing="1">
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <Input
                  placeholder="Ingresa tu nombre"
                  onChange={handleNameChange}
                  borderColor="black"
                  _placeholder={{ color: '#1a1a1a8e' }}
                  value={userName}
                />
              </VStack>
              <Stack>
                <Text color={styles.black}>
                  -Al ingresar tu nombre nuestro equipo de meseros podrá darte
                  una atención más personalizada. 😊
                </Text>
                <Text color={styles.black} fontWeight="semibold">
                  Además:
                </Text>
                <Text color={styles.black}>
                  🥗 Podrás compartir sugerencias con las demás personas de la
                  mesa.
                </Text>
                <Text color={styles.black}>
                  💵 Dividir la cuenta por persona.
                </Text>
                <Text color={styles.black}>
                  🥘 Aceptar recomendaciones de otros.
                </Text>
              </Stack>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderColor="black" borderTopWidth="1px">
            <Button
              w="full"
              onClick={addUserHandler}
              style={{
                padding: '10px',
                background: styles.yellow,
                color: styles.black,
              }}
            >
              Entrar a la mesa
            </Button>
          </DrawerFooter>
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
