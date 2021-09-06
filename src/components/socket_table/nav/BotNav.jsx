import { Flex, IconButton } from '@chakra-ui/react'
import NameModal from '../modals/NameModal'
import { AiFillGift } from 'react-icons/ai'

import socket from '../socketConnect'

const BotNav = () => {
  const showServerUserList = () => {
    socket.emit('displayUsers')
  }

  return (
    <Flex
      position="fixed"
      bottom="0"
      bg="cyan.50"
      zIndex="10"
      minH="10px"
      w="full"
      p="2"
    >
      <NameModal />
      <IconButton size="sm" onClick={showServerUserList}>
        <AiFillGift />
      </IconButton>
    </Flex>
  )
}

export default BotNav
