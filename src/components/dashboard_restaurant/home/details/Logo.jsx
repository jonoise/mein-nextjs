import restaurantDetailStore from '../../../../stores/restaurantDetailStore'
import { fallbackImage } from '../../../../constants'
import { Flex, Box, Image } from '@chakra-ui/react'

const Logo = () => {
  const restaurant = restaurantDetailStore((state) => state.restaurant)

  return (
    <Flex minW="300px" maxW="300px" justify="center" align="center">
      <Box h="full">
        <Image
          w="full"
          h="full"
          src={restaurant.logo ? restaurant.logo : fallbackImage}
        />
      </Box>
    </Flex>
  )
}

export default Logo
