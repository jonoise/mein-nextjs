import { Flex, Heading, Stack, Text, Spinner } from '@chakra-ui/react'
import useRestaurantStore from '../../stores/restaurantDetailStore'

const Welcome = ({ section }) => {
  const restaurant = useRestaurantStore((state) => state.restaurant)

  return (
    <>
      {!restaurant ? (
        <Spinner />
      ) : (
        <Stack direction="column" w="full">
          <Text color="#a0a0a0">{section}</Text>
          <Flex w="full" justify="space-between" align="flex-end">
            <Heading> {restaurant.name}</Heading>
          </Flex>
        </Stack>
      )}
    </>
  )
}

export default Welcome
