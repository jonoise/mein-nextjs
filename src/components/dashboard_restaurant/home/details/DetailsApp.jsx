import { Image, Box, Stack, Flex, Text, HStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import restaurantStore from '../../../../stores/restaurantDetailStore'
import DetailsBreakDown from './DetailsBreakDown'
import Logo from './Logo'
import PlanDetails from './PlanDetails'

const CountGroup = () => {
  const restaurant = restaurantStore((state) => state.restaurant)
  return (
    <>
      {restaurant && (
        <>
          <Stack w="full">
            <Text fontSize="large" fontWeight="bold">
              Detalles
            </Text>
            <Flex
              w="full"
              minH="400px"
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align="center"
            >
              <Logo />
              <DetailsBreakDown />
              <PlanDetails />
            </Flex>
          </Stack>
        </>
      )}
    </>
  )
}

export default CountGroup
