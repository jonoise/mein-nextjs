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
import { FiBookOpen } from 'react-icons/fi'
import { GiHotMeal } from 'react-icons/gi'
import { FaRegChartBar, FaRegBell, FaRegQuestionCircle } from 'react-icons/fa'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { LogoutItem } from './LogoutItem'
import { SearchField } from './SearchField'
import { UserProfile } from './UserProfile'
import { useSession } from 'next-auth/client'
import useDashboardStore from '../../../stores/dashboardStore'
import { useEffect } from 'react'

export const Sidebar = (props) => {
  const [session, loading] = useSession()
  const dashboardSection = useDashboardStore((state) => state.dashboardSection)
  return (
    <Flex
      bg={mode('gray.50', 'gray.800')}
      direction="column"
      borderRightWidth="1px"
      width="64"
      {...props}
    >
      <Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
        <Box mb="6">
          <Logo color={mode('blue.600', 'blue.400')} h="6" />
        </Box>

        <Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
          <Stack spacing="1">
            <NavLink
              href="/dashboard/restaurantes"
              label="Restaurantes"
              icon={IoRestaurantOutline}
              isActive={dashboardSection === 'restaurantes'}
            />
            <NavLink
              id="menus"
              href="/dashboard/menus"
              label="Menus"
              icon={FiBookOpen}
              isActive={dashboardSection === 'menus'}
            />
            <NavLink
              id="mesas"
              href="/dashboard/mesas"
              label="Mesas"
              icon={BiChair}
              isActive={dashboardSection === 'mesas'}
            />
            <NavLink
              id="comidas"
              href="/dashboard/comidas"
              label="Comidas"
              icon={GiHotMeal}
              isActive={dashboardSection === 'comidas'}
            />
            <NavLink
              id="stats"
              href="/dashboard/stats"
              label="Estadísticas"
              icon={FaRegChartBar}
              isActive={dashboardSection === 'stats'}
            />
          </Stack>

          <Divider />

          <Stack spacing="1">
            <NavLink label="Perfil" icon={BiUser} />
            <NavLink label="Notificaciones" icon={FaRegBell} />
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
