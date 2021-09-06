import { Flex, useToast } from '@chakra-ui/react'
import BotNav from './nav/BotNav'
import Welcome from './Welcome'
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
    <Flex minH="100vh" bg="facebook.500" direction="column">
      <Welcome />
      <BotNav />
    </Flex>
  )
}

export default TableLayout
