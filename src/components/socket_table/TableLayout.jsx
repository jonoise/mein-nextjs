import { Flex, useToast } from '@chakra-ui/react'
import BotNav from './nav/BotNav'
import Menu from './menu/Mein'
import socket from './socketConnect'
import TopNav from './nav/TopNav'
import GenericHead from '../generichead/GenericHead'
import useTableStore from '../../stores/tableStore'
const TableLayout = () => {
  const rest = useTableStore((state) => state.restaurant)
  const tableNumber = useTableStore((state) => state.tableNumber)
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
      {rest && <GenericHead title={`Mesa ${tableNumber} del ${rest.name}`} />}
      <TopNav />
      <Menu />
      <BotNav />
    </Flex>
  )
}

export default TableLayout
