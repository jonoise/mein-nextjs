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
import { BiLogOut, BiUser } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { GrBook } from 'react-icons/gr'
import { FaDollarSign, FaRegBell, FaRegQuestionCircle } from 'react-icons/fa'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { LogoutItem } from './LogoutItem'
import { UserProfile } from './UserProfile'
import { useSession } from 'next-auth/client'
import useDashboardStore from '../../../stores/dashboardStore'

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
              href="/dashboard"
              label="General"
              icon={GrBook}
              isActive={dashboardSection === 'general'}
            />
            <NavLink
              href="/dashboard/restaurantes"
              label="Restaurantes"
              icon={IoRestaurantOutline}
              isActive={dashboardSection === 'restaurants'}
            />
            <NavLink
              id="plans"
              href="/dashboard/plans"
              label="Planes"
              icon={FaDollarSign}
              isActive={dashboardSection === 'plans'}
            />
            <NavLink
              id="settings"
              href="/dashboard/settings"
              label="Configuración"
              icon={FiSettings}
              isActive={dashboardSection === 'settings'}
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
