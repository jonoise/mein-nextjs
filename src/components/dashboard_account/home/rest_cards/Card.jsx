import {
  Link,
  HStack,
  Badge,
  Flex,
  Stack,
  VStack,
  Text,
  Box,
} from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon, MinusIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Flex)

const Card = ({ rest }) => {
  return (
    <MotionBox
      minW="280px"
      minH="220px"
      maxH="220px"
      bg="#dedeff"
      rounded="md"
      p="5"
      as={'a'}
      href={`/dashboard/restaurants/${rest.uuid}/`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      _hover={{ background: '#d0d0ff' }}
      transition={{ duration: 1 }}
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
    </MotionBox>
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
      {rest._counting.total_last_month ? (
        <Text fontSize="26px" fontWeight="black">
          ₡ {rest._counting.total_last_month}
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
