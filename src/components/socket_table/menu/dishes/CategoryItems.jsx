import { Stack, Text, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useTableStore from '../../../../stores/tableStore'

import SingleDish from './SingleDish'

const CategoryItems = ({ stateCategory }) => {
  // Este componente se renderiza si hay un stateCategory en el state.
  // Y muestra los platillos de una categoría del menú.

  const menu = useTableStore((state) => state.menu)
  const setStateCategory = useTableStore((state) => state.setStateCategory)
  const [category, setCategory] = useState(null)

  useEffect(() => {
    if (menu) {
      const currentCategory = menu._categories.filter(
        (cat) => cat.name === stateCategory
      )
      setCategory(currentCategory[0])
    }
    console.log(menu)
    console.log(category)
  }, [stateCategory])

  return (
    <Stack spacing="10">
      <Stack>
        {category && (
          <>
            <Flex justify="space-between" align="center">
              <Text
                fontWeight="semibold"
                fontSize="20px"
                color="red.900"
                pl="2"
              >
                {category.name}
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="16px"
                color="red.900"
                pr="2"
                onClick={() => setStateCategory(null)}
              >
                regresar
              </Text>
            </Flex>
            <Stack>
              {category._dishes.map((dish) => {
                return <SingleDish dish={dish} key={dish.uuid} />
              })}
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  )
}

export default CategoryItems
