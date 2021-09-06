import { Flex, useToast } from '@chakra-ui/react'
import BotNav from './nav/BotNav'
import Menu from './menu/Mein'
import socket from './socketConnect'

const TableLayout = () => {
  const toast = useToast()

  socket.on('new-user', (user) => {
    toast({
      id: user,
      title: `${user} ingresó a la mesa.`,
      position: 'top',
    })
  })

  return (
    <Flex minH="100vh" direction="column">
      <Menu />
      <BotNav />
    </Flex>
  )
}

export default TableLayout
