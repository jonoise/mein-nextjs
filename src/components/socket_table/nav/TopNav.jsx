import { Flex, Text, HStack, IconButton, Center } from '@chakra-ui/react'
import useTableStore from '../../../stores/tableStore'
import { BiChair } from 'react-icons/bi'

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
      <TableButton />
    </Flex>
  )
}

export default TopNav

const NotificationBadge = (props) => (
  <Center
    bg="red.400"
    fontSize="xs"
    fontWeight="bold"
    position="absolute"
    rounded="full"
    textAlign="center"
    top="-4px"
    insetEnd="0"
    w="20px"
    h="20px"
    zIndex="2"
    {...props}
  />
)

export const TableButton = (props) => (
  <Center
    as="button"
    outline="0"
    w="8"
    h="8"
    position="relative"
    rounded="md"
    _hover={{ bg: 'whiteAlpha.200' }}
    _focus={{ shadow: 'outline' }}
    {...props}
  >
    <NotificationBadge>9</NotificationBadge>
    <IconButton
      colorScheme="blue"
      size="sm"
      rounded="full"
      icon={<BiChair />}
      m="0"
    />
  </Center>
)
