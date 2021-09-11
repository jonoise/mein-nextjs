import { Stack, Text } from '@chakra-ui/react'
import useTableStore from '../../../stores/tableStore'
import RestaurantSpecifics from './dishes/RestaurantSpecifics'
import CategoryItems from './dishes/CategoryItems'
const MeinBody = () => {
  const stateCategory = useTableStore((state) => state.stateCategory)
  return (
    <Stack minH="100vh" w="full" bg="white" p="2">
      {stateCategory ? (
        // Desplegar items.
        <CategoryItems stateCategory={stateCategory} />
      ) : (
        // Desplegar todo el menu
        <RestaurantSpecifics />
      )}
    </Stack>
  )
}

export default MeinBody
