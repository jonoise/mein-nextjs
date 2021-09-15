import { HStack, Badge, Flex, Stack, VStack, Text } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon, MinusIcon } from '@chakra-ui/icons'
const Card = ({ rest }) => {
  return (
    <Flex
      minW="280px"
      minH="220px"
      maxH="220px"
      bg="#dedeff"
      rounded="md"
      p="5"
    >
      <Stack w="full">
        <Text fontSize="18px" fontWeight="semibold">
          {rest.name}
        </Text>
        <HStack justify="space-between">
          <Text fontSize="14px" fontWeight="light">
            Mesas: {rest._plan.max_tables}
          </Text>
          <Badge colorScheme="yellow">{rest._plan.type_of} tier</Badge>
        </HStack>
        <Total rest={rest} />
      </Stack>
    </Flex>
  )
}

export default Card

const Total = ({ rest }) => {
  return (
    <VStack
      spacing="0"
      border="1px solid #c0c0e9"
      p="5"
      rounded="md"
      minH="110px"
      justify="center"
      align="center"
    >
      {rest.counting.last_month ? (
        <Text fontSize="26px" fontWeight="black">
          ₡ {rest.counting.last_month}
        </Text>
      ) : (
        <MinusIcon />
      )}
      {/* {rest.up ? (
          <TriangleUpIcon color="green.400" />
        ) : (
          <TriangleDownIcon color="red.200" />
        )} */}
      <Text fontSize="16px" fontWeight="light">
        Ganancia último mes
      </Text>
    </VStack>
  )
}
