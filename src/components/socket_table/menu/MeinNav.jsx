import { Flex, Text, HStack } from '@chakra-ui/react'
import useTableStore from '../../../stores/tableStore'

const TopNav = () => {
  const tableNumber = useTableStore((state) => state.tableNumber)

  return (
    <Flex
      position="fixed"
      top="0"
      bg="#f2f2f2"
      zIndex="9"
      minH="10px"
      w="full"
      p="2"
      justify="space-between"
      align="center"
      borderBottom="2px solid #d0d0d0"
    >
      <Text fontSize="18px" fontWeight="semibold">
        Mesa {tableNumber && tableNumber}
      </Text>
    </Flex>
  )
}

export default TopNav
