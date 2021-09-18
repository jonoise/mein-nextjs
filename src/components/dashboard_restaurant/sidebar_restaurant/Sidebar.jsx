import {
  Box,
  Divider,
  Flex,
  Spacer,
  Stack,
  useColorModeValue as mode,
  Spinner,
} from '@chakra-ui/react'
import { IoRestaurantOutline } from 'react-icons/io5'
import { BiChair, BiLogOut, BiUser } from 'react-icons/bi'
import { FiBookOpen, FiSettings } from 'react-icons/fi'
import { MdKitchen } from 'react-icons/md'
import { GiHotMeal } from 'react-icons/gi'
import { FaRegChartBar, FaRegBell, FaRegQuestionCircle } from 'react-icons/fa'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { LogoutItem } from './LogoutItem'
import { UserProfile } from './UserProfile'
import { useSession } from 'next-auth/client'
import useGeneralDashboardStore from '../../../stores/generalDashboardStore'
import restaurantStore from '../../../stores/restaurantDetailStore'

export const Sidebar = (props) => {
  const [session, loading] = useSession()
  const restaurant = restaurantStore((state) => state.restaurant)

  const dashboardSection = useGeneralDashboardStore(
    (state) => state.dashboardSection
  )
  return (
    <Flex bg="#efefef" direction="column" borderRightWidth="1px" {...props}>
      <Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
        <Box mb="6">
          <Logo h="6" />
        </Box>

        <Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
          <Stack spacing="1">
            <NavLink
              href="/dashboard"
              label="General"
              icon={IoRestaurantOutline}
              isActive={dashboardSection === 'general'}
            />
            <NavLink
              id="cocina"
              href={
                restaurant && `/dashboard/restaurants/${restaurant.uuid}/cocina`
              }
              label="Cocina"
              icon={MdKitchen}
              isActive={dashboardSection === 'cocina'}
            />
            <NavLink
              id="menus"
              href={
                restaurant && `/dashboard/restaurants/${restaurant.uuid}/menus`
              }
              label="Menus"
              icon={FiBookOpen}
              isActive={dashboardSection === 'menus'}
            />
            <NavLink
              id="mesas"
              href={
                restaurant && `/dashboard/restaurants/${restaurant.uuid}/tables`
              }
              label="Mesas"
              icon={BiChair}
              isActive={dashboardSection === 'tables'}
            />
            <NavLink
              id="comidas"
              href={
                restaurant && `/dashboard/restaurants/${restaurant.uuid}/dishes`
              }
              label="Comidas"
              icon={GiHotMeal}
              isActive={dashboardSection === 'dishes'}
            />
            <NavLink
              id="stats"
              href={
                restaurant && `/dashboard/restaurants/${restaurant.uuid}/stats`
              }
              label="Estadísticas"
              icon={FaRegChartBar}
              isActive={dashboardSection === 'stats'}
            />
          </Stack>

          <Divider />

          <Stack spacing="1">
            <NavLink label="Configuración" icon={FiSettings} />
            <NavLink label="Eventos" icon={FaRegBell} />
            <NavLink label="Centro de Ayuda" icon={FaRegQuestionCircle} />
            <LogoutItem label="Salir" icon={BiLogOut} />
          </Stack>
        </Stack>
        <Spacer />
      </Flex>

      {!loading ? (
        <UserProfile
          name={session.user.name}
          image={session.user.image}
          email={session.user.email}
        />
      ) : (
        <Flex w="full" h="full" justify="center" align="center">
          <Spinner size="sm" />
        </Flex>
      )}
    </Flex>
  )
}
