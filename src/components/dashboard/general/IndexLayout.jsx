import { Flex, VStack, Divider, useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { MobileTopBar } from '../sidebar_dashboard/MobileTopBar'
import { Sidebar } from '../sidebar_dashboard/Sidebar'
import useGeneralDashboardStore from '../../../stores/generalDashboardStore'
import axiosWithJWT from '../../../lib/axios'
import { useSession } from 'next-auth/client'
import Welcome from './Welcome'
import Graph from './rests_graph/Graph'
import CardsList from './rest_cards/CardsList'
import App from '../sidebar_dashboard/App'
import AddRestaurantModal from '../modals/addRestaurant/AddRestaurantModal'

const GeneralLayout = () => {
  const setDashboardSection = useGeneralDashboardStore(
    (state) => state.setDashboardSection
  )
  const setDashboardRestaurants = useGeneralDashboardStore(
    (state) => state.setDashboardRestaurants
  )
  const [session, loading] = useSession()

  useEffect(() => {
    setDashboardSection('general')
    const fetchRestaurants = async () => {
      const rest = await axiosWithJWT(
        'GET',
        `restaurants?owner=${session.user.user}`,
        null,
        session
      )
      setDashboardRestaurants(rest)
      console.log(rest)
    }
    !loading && fetchRestaurants()
  }, [loading])

  return <App Compo={Compo} SideCompo={SideCompo} />
}

export default GeneralLayout

const Compo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <VStack flex="1" p="6" bg="#f4f4f4" maxW={{ base: 'full', md: '1000px' }}>
      <AddRestaurantModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Welcome onOpen={onOpen} />
      <Divider border="5px" />
      <Graph />
      <Divider border="5px" />
      <CardsList onOpen={onOpen} />
    </VStack>
  )
}

const SideCompo = () => {
  return (
    <VStack
      display={{ base: 'none', md: 'flex' }}
      maxW="300px"
      minW="300px"
      p="6"
      bg="#c8ffff"
      minH="100%"
    ></VStack>
  )
}
