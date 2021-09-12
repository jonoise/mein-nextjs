import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { MobileTopBar } from '../sidebar_dashboard/MobileTopBar'
import { Sidebar } from '../sidebar_dashboard/Sidebar'
import useDashboardStore from '../../../stores/dashboardStore'
import axiosWithJWT from '../../../lib/axios'
import { useSession } from 'next-auth/client'

const Layout = () => {
  const setDashboardSection = useDashboardStore(
    (state) => state.setDashboardSection
  )
  const setDashboardRestaurants = useDashboardStore(
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

  return (
    <Flex h="100vh" flexDirection="column" w="full">
      <MobileTopBar />
      <Flex flex="1" overflow="hidden">
        <Sidebar display={{ base: 'none', md: 'flex' }} />
        <Flex flex="1" p="6"></Flex>
      </Flex>
    </Flex>
  )
}

export default Layout

const Compo = () => {
  return <h1>psop</h1>
}
