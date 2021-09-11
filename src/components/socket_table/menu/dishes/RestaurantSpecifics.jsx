import axiosWithJWT from '../../../../lib/axios'
import useTableStore from '../../../../stores/tableStore'

import { Text, VStack } from '@chakra-ui/react'
import SingleDish from './SingleDish'

const MenuItems = () => {
  const restaurant = useTableStore((state) => state.restaurant)
  const menu = useTableStore((state) => state.menu)
  return (
    restaurant && (
      <VStack textAlign="center">
        <Text fontSize="20px" fontWeight="semibold">
          Bienvenidos a {restaurant.name}
        </Text>
        <Text>{restaurant.welcome_message.trim()}</Text>
      </VStack>
    )
  )
}

export default MenuItems
