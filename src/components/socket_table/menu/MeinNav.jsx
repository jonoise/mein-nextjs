import { Flex, Text } from '@chakra-ui/react'
import WaiterModal from '../modals/WaiterModal'
import useTableStore from '../tableStore'

const TopNav = () => {
  const tableNumber = useTableStore((state) => state.tableNumber)

  return (
    <Flex
      position="fixed"
      top="0"
      bg="#fee"
      zIndex="9"
      minH="10px"
      w="full"
      p="2"
      justify="space-between"
      align="center"
      borderBottom="2px solid #1a1a1a"
    >
      <WaiterModal />
      <Text fontSize="18px" fontWeight="semibold">
        Mesa {tableNumber && tableNumber}
      </Text>
      <WaiterModal />
    </Flex>
  )
}

export default TopNav
