import DashboardApp from '../sidebar_restaurant/App'
import { VStack, Divider } from '@chakra-ui/react'
import { useEffect } from 'react'
import useGeneralDashboardStore from '../../../stores/generalDashboardStore'
import RestaurantDetailHeader from '../DetailHeader'
import Details from './details/DetailsApp'
import Counting from './counting/CountingApp'

const RestaurantDashboardLayout = () => {
  const setDashboardSection = useGeneralDashboardStore(
    (state) => state.setDashboardSection
  )

  // Set Dashboard Section
  useEffect(() => {
    setDashboardSection('general')
  }, [])
  return <DashboardApp Compo={Compo} />
}

export default RestaurantDashboardLayout

const Compo = () => {
  return (
    <VStack flex="1" p="6" bg="#f4f4f4" maxW={{ base: 'full', md: 'full' }}>
      <RestaurantDetailHeader section={'Restaurante'} />
      <Divider border="5px" />
      <Details />
      <Divider border="5px" />
      <Counting />
    </VStack>
  )
}
