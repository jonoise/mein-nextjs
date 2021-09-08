import { Flex, Stack, Text, Image, Box, Icon, Badge } from '@chakra-ui/react'
import { GiMeat } from 'react-icons/gi'
import useDishModalStore from '../../dishModalStore'

const SingleDish = ({ dish }) => {
  const { name, description, price, uuid } = dish
  const setIsOpen = useDishModalStore((state) => state.setIsOpen)
  const setCurrentDishUUID = useDishModalStore(
    (state) => state.setCurrentDishUUID
  )

  const openDishModal = () => {
    setCurrentDishUUID(uuid)
    setIsOpen(true)
  }

  return (
    <Flex
      w="full"
      h="full"
      bg="#fefef3"
      p="2"
      rounded="md"
      shadow="lg"
      onClick={openDishModal}
    >
      <Flex w="30%" minH="5rem" maxH="5rem">
        <Image
          src={dish.image}
          roundedLeft="md"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Flex>
      <Flex
        direction="column"
        minH="full"
        w="full"
        justify="space-between"
        roundedRight="md"
        bg="fefef3"
        p="2"
        border="1px solid #ffc1c1"
        borderLeft="none"
      >
        <Flex justify="space-between" align="start">
          <Box>
            <Text fontSize="16px" fontWeight="semibold" color="black">
              {name}
            </Text>
            <Text fontSize="10px" color="black">
              {description.length < 40
                ? description
                : `${description.slice(0, 40)}...`}
            </Text>
          </Box>
          <Flex p="2px" rounded="full" border="1px solid black">
            <Icon as={GiMeat} w="18px" h="18px" />
          </Flex>
        </Flex>
        <Flex justify="right" align="end">
          <Box></Box>
          <Badge variant="solid" colorScheme="green">
            ₡ {price}
          </Badge>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SingleDish
