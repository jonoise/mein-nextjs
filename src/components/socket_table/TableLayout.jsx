import { VStack, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000')

const TableLayout = () => {
  const [user, setUser] = useState(null)
  const toast = useToast()

  socket.on('connect', () => {
    socket.emit('new-user', tableInstance)
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
      <button
        onClick={addUser}
        style={{ padding: '10px', background: 'yellow' }}
      >
        log
      </button>
    </VStack>
  )
}

export default TableLayout
