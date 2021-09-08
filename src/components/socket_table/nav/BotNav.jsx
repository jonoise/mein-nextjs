import { Flex, HStack } from '@chakra-ui/react'
import NameModal from '../modals/NameModal'
import TipModal from '../modals/TipModal'
import WaiterModal from '../modals/WaiterModal'

const BotNav = () => {
  return (
    <Flex
      position="fixed"
      bottom="0"
      bg="#f2f2f2"
      zIndex="10"
      minH="4rem"
      w="full"
      p="2"
      borderTop="2px solid #d0d0d0"
      justify="space-between"
      align="center"
    >
      <HStack>
        <TipModal />
        <WaiterModal />
      </HStack>
      <NameModal />
    </Flex>
  )
}

export default BotNav
