import { Flex } from '@chakra-ui/react'
import NameModal from '../modals/NameModal'

const BotNav = () => {
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
    </Flex>
  )
}

export default BotNav
