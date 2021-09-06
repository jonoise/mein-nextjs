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
  Flex,
  Image,
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
  const restaurant = useTableStore((state) => state.restaurant)

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
    console.log(restaurant)
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
            <Flex w="full" h="full" justify="space-between" align="center">
              MESA {tableNumber}{' '}
              <Button
                onClick={addUserHandler}
                style={{
                  padding: '10px',
                  background: styles.yellow,
                  color: styles.black,
                }}
              >
                Sentarme
              </Button>
            </Flex>
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
              <Stack fontSize="16px">
                <Text color={styles.black}>
                  -Al ingresar tu nombre nuestro equipo de meseros podrá darte
                  una atención más personalizada. 😊
                </Text>
                <Text color={styles.black} fontWeight="semibold">
                  Además podrás:
                </Text>
                <Text color={styles.black}>
                  🔔 Llamar a un mesero con el toque de un botón.
                </Text>
                <Text color={styles.black}>
                  💵 Dividir la cuenta de manera individual si lo deseas.
                </Text>
                <Text color={styles.black}>
                  🥗 Compartir sugerencias en tiempo real con los miembros de la
                  mesa.
                </Text>
                <Text color={styles.black}>
                  🥘 Aceptar recomendaciones de las demás personas de la mesa.
                </Text>
              </Stack>
            </Stack>
          </DrawerBody>

          <DrawerFooter
            borderColor="none"
            borderTopWidth="1px"
            justifyContent="center"
          >
            {restaurant && <Image w="120px" src={restaurant.logo} />}
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
