import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuItem,
  MenuList,
  Text,
  useMenuButton,
  useColorModeValue as mode,
  Spinner,
  Link,
} from '@chakra-ui/react'
import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'

const UserAvatar = ({ user }) => (
  <Avatar size="sm" src={user.image} name={user.name} />
)

const ProfileMenuButton = (props) => {
  const buttonProps = useMenuButton(props)
  return (
    <Flex
      {...buttonProps}
      as="button"
      flexShrink={0}
      rounded="full"
      outline="0"
      _focus={{ shadow: 'outline' }}
    >
      <Box srOnly>Open user menu</Box>
      <UserAvatar user={props.user} />
    </Flex>
  )
}

export const ProfileDropdown = () => {
  const [session, loading] = useSession()
  const [user, setUser] = useState(null)

  useEffect(() => {
    !loading && session && setUser(session.user)
  }, [loading])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        user && (
          <Menu>
            <ProfileMenuButton user={user} />
            <MenuList
              rounded="md"
              shadow="lg"
              py="1"
              color={mode('gray.600', 'inherit')}
              fontSize="sm"
            >
              <HStack px="3" py="4">
                <UserAvatar user={user} />
                <Box lineHeight="1">
                  <Text fontWeight="semibold">{user.name}</Text>
                  <Text mt="1" fontSize="xs" color="gray.500">
                    {user.email}
                  </Text>
                </Box>
              </HStack>
              <Link href="/dashboard">
                <MenuItem fontWeight="medium">Mi empresa</MenuItem>
              </Link>
              <Link>
                <MenuItem fontWeight="medium">Feedback & Soporte</MenuItem>
              </Link>
              <Link>
                <MenuItem fontWeight="medium">Configuración</MenuItem>
              </Link>
              <MenuItem fontWeight="medium" color={mode('red.500', 'red.300')}>
                Salir
              </MenuItem>
            </MenuList>
          </Menu>
        )
      )}
    </>
  )
}
