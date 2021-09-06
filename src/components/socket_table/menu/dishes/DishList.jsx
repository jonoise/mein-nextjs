import { Stack, Text } from '@chakra-ui/react'
import SingleDish from './SingleDish'
import useTableStore from '../tableStore'
const DishList = () => {
  const dishes = useTableStore((state) => state.dishes)
  return (
    <Stack minH="100vh" w="full" bg="white" p="2">
      {dishes.map((dish) => {
        return <SingleDish dish={dish} key={dish.id} />
      })}
    </Stack>
  )
}

export default DishList
