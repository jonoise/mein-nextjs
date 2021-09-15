import { HStack, Stack, Text, Spinner, Flex } from '@chakra-ui/react'
import useGeneralDashboardStore from '../../../../stores/generalDashboardStore'
import AddCard from './AddCard'
import Card from './Card'
const CardsList = ({ onOpen }) => {
  const restaurants = useGeneralDashboardStore((state) => state.restaurants)
  return (
    <>
      <Stack w="full">
        <Text fontWeight="semibold">Restaurantes</Text>
        {restaurants ? (
          <>
            <HStack
              w="full"
              overflowX="scroll"
              justifyContent="flex-start"
              spacing="3"
              p="5"
              className="styledScrollbar"
            >
              {restaurants.map((rest, index) => {
                return <Card rest={rest} key={index} />
              })}
              <AddCard onOpen={onOpen} />
            </HStack>
          </>
        ) : (
          //
          <Flex
            w="full"
            minH="220px"
            maxH="220px"
            justify="center"
            align="center"
          >
            <Spinner />
          </Flex>
        )}
      </Stack>
    </>
  )
}

export default CardsList

const restas = [
  {
    name: 'Osteria Italaiana',
    tables: 12,
    total: '245m',
    up: true,
  },
  // {
  //   name: 'Vila Paraíso',
  //   tables: 15,
  //   total: '1.29mill',
  //   up: false,
  // },
  // {
  //   name: 'Pizza Loca',
  //   tables: 7,
  //   total: '574k',
  //   up: true,
  // },
  // {
  //   name: 'Casa China',
  //   tables: 26,
  //   total: '1.62mill',
  //   up: true,
  // },
]
