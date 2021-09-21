import { BiChair } from 'react-icons/bi'
import { useRef } from 'react'
import {
  Center,
  IconButton,
  Drawer,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Flex,
  Button,
  Stack,
  VStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import socket from '../../../lib/socketConnect'
import useTableStore from '../../../stores/tableStore'
const TableModal = () => {
  const firstField = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const instance_uuid = useTableStore((state) => state.instance_uuid)
  const handleBroadcast = () => {
    socket.emit('broadcastGreeting', 'un mensaje. UNO!', instance_uuid)
  }

  const handleDisplayUser = () => {
    socket.emit('displayUsers')
  }

  const handleDisplayUserInInstance = () => {
    socket.emit('displayUsersInRoom', instance_uuid)
  }

  return (
    <>
      <TableButton onOpen={onOpen} />
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
              <Button
                style={{
                  padding: '10px',
                  background: styles.yellow,
                  color: styles.black,
                }}
                onClick={onClose}
              >
                Regresar
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <VStack spacing="1">
                <Button onClick={handleBroadcast}>Broadcast</Button>
                <Button onClick={handleDisplayUser}>Users Object</Button>
                <Button onClick={handleDisplayUserInInstance}>instance</Button>
              </VStack>
            </Stack>
          </DrawerBody>

          <DrawerFooter
            borderColor="none"
            borderTopWidth="1px"
            justifyContent="center"
          ></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default TableModal

const NotificationBadge = (props) => (
  <Center
    bg="red.400"
    fontSize="xs"
    fontWeight="bold"
    position="absolute"
    rounded="full"
    textAlign="center"
    top="-4px"
    insetEnd="0"
    w="20px"
    h="20px"
    zIndex="2"
    {...props}
  />
)

export const TableButton = (props) => (
  <Center
    outline="0"
    w="8"
    h="8"
    position="relative"
    _hover={{ bg: 'whiteAlpha.200' }}
    _focus={{ shadow: 'outline' }}
  >
    <NotificationBadge>9</NotificationBadge>
    <IconButton
      colorScheme="blue"
      size="sm"
      rounded="full"
      onClick={props.onOpen}
      icon={<BiChair />}
      m="0"
    />
  </Center>
)

const styles = {
  yellow: '#f5c000',
  blue: '#5267f6',
  green: '#6afdef',
  purple: '#8d2ef0',
  red: '#ec7965',
  black: '#1a1a1a',
  dimWhite: '#f2f2f2',
}
