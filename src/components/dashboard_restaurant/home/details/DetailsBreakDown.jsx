import {
  Badge,
  Link,
  Text,
  Flex,
  Stack,
  HStack,
  Divider,
} from '@chakra-ui/react'
import restaurantDetailStore from '../../../../stores/restaurantDetailStore'
import GenericDetail from './GenericDetail'

const DetailsBreakDown = () => {
  const restaurant = restaurantDetailStore((state) => state.restaurant)
  console.log(restaurant)
  return (
    <Stack
      py={{ base: '4', md: '12' }}
      px="5"
      flex="1"
      w="full"
      h="full"
      justify="space-between"
    >
      {/* SINGLE DETAILS */}
      <GenericDetail title={'Nombre'} value={restaurant.name} />
      <GenericDetail
        title={'Mensaje de bienvenida'}
        value={restaurant.welcome_message}
      />
      <GenericDetail title={'Tipo de restaurante'} value={restaurant.type_of} />
      <GenericDetail title={'Fundado'} value={'2018'} />
      {/* MENU DETAIL */}
      <MenuDetail />
    </Stack>
  )
}

export default DetailsBreakDown

const MenuDetail = () => {
  const restaurant = restaurantDetailStore((state) => state.restaurant)

  return (
    <Stack>
      <HStack>
        <Text fontWeight="semibold">Menú principal:</Text>
        <Text>
          {restaurant.main_menu ? (
            <Link
              href={`/dashboard/restaurant/${restaurant.uuid}/menu/${restaurant.main_menu}`}
            >
              <Badge fontWeight="semibold" colorScheme="blue">
                <Text>Ver menú.</Text>
              </Badge>
            </Link>
          ) : (
            '-------'
          )}
        </Text>
      </HStack>
      <Divider />
    </Stack>
  )
}
