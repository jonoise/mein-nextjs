import { Flex, Stack, Text, Image, Box, Icon, Badge } from '@chakra-ui/react'
import { GiMeat } from 'react-icons/gi'
const SingleDish = ({ dish }) => {
  console.log(dish)
  return (
    <Flex w="full" h="full" bg="#fefef3" p="2" rounded="md" shadow="lg">
      <Flex w="30%" minH="full">
        <Image
          src={dish.image}
          // style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          roundedLeft="md"
          maxW="100%"
          maxHeight="100%"
          objectFit="cover"
        />
      </Flex>
      <Flex
        direction="column"
        minH="full"
        w="full"
        roundedRight="md"
        bg="fefef3"
        p="1"
        border="1px solid #ffc1c1"
        borderLeft="none"
      >
        <Flex justify="space-between" align="start">
          <Box>
            <Text fontSize="14px" fontWeight="semibold" color="black">
              {dish.name}
            </Text>
            <Text fontSize="10px" color="black">
              {dish.sides}
            </Text>
          </Box>
          <Flex p="2px" rounded="full" border="1px solid black">
            <Icon as={GiMeat} w="18px" h="18px" />
          </Flex>
        </Flex>
        <Flex justify="space-between" align="end">
          <Box></Box>
          <Badge variant="solid" colorScheme="green">
            {dish.price}
          </Badge>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SingleDish
