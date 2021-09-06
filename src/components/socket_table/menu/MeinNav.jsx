import { Flex, IconButton } from '@chakra-ui/react'
import { AiFillGift } from 'react-icons/ai'

import socket from '../socketConnect'

const BotNav = () => {
  const showServerUserList = () => {
    socket.emit('displayUsers')
  }

  return (
    <Flex
      position="fixed"
      top="0"
      bg="cyan.200"
      zIndex="1"
      minH="10px"
      w="full"
      p="2"
    >
      <IconButton size="sm" onClick={showServerUserList}>
        <AiFillGift />
      </IconButton>
    </Flex>
  )
}

export default BotNav
