import { Stack, Flex, Text, Divider, Badge } from '@chakra-ui/react'
import GenericDetail from './GenericDetail'
import restaurantStore from '../../../../stores/restaurantDetailStore'
import { useState } from 'react'
import UpgradeButton from './UpgradeButton'

const PlanDetails = () => {
  const restaurant = restaurantStore((state) => state.restaurant)

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
      <TierDetail
        title={'Tipo de Plan'}
        value={`${restaurant._plan.type_of}`}
      />
      <GenericDetail
        title={'Máximo de mesas'}
        value={restaurant._plan.max_tables}
      />
      <GenericDetail
        title={'Máximo de órdenes al mes'}
        value={`${restaurant._counting.orders}/${restaurant._plan.max_orders}`}
      />
      <GenericDetail
        title={'Pagas'}
        value={`₡${restaurant._plan.pricing} colones al mes.`}
      />
      {/* MENU DETAIL */}
      <UpgradeButton />
    </Stack>
  )
}

export default PlanDetails

const TierDetail = ({ title, value }) => {
  // @ value could be: "free", "gold", "pro"
  const mapColorSchema = {
    free: 'blue',
    gold: 'yellow',
    pro: 'pink',
  }

  return (
    <>
      <Stack>
        <Flex align="center">
          <Text mr="2" fontWeight="semibold">
            {title}:
          </Text>
          <Badge colorScheme={mapColorSchema[value]}>{value} tier</Badge>
        </Flex>
        <Divider />
      </Stack>
    </>
  )
}
