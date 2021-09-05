import { VStack, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { io } from 'socket.io-client'
import NameModal from './modals/NameModal'
import useTableStore from './tableStore'

const socket = io('http://localhost:4000')

const TableLayout = () => {
  const [user, setUser] = useState(null)
  const toast = useToast()
  const instance_uuid = useTableStore((state) => state.instance_uuid)

  socket.on('connect', () => {
    socket.emit('new-user', instance_uuid)
  })

  socket.on('new-user', (user) => {
    toast({
      id: user,
      title: `${user} ingresó a la mesa.`,
      position: 'top',
    })
  })

  const addUser = () => {}
  return (
    <VStack minH="100vh" bg="facebook.500">
      <NameModal />
    </VStack>
  )
}

export default TableLayout
