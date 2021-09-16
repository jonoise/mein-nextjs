import {
  HStack,
  Icon,
  Link,
  LinkProps,
  useColorModeValue as mode,
  Text,
} from '@chakra-ui/react'

export const NavLink = (props) => {
  const { icon, isActive, label, ...rest } = props
  return (
    <Link
      display="block"
      py="2"
      px="3"
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      fontSize="sm"
      userSelect="none"
      aria-current={isActive ? 'page' : undefined}
      color="#1a1a1a"
      _hover={{
        bg: '#ffe177',
        color: '#1a1a1a',
      }}
      _activeLink={{
        bg: '#F5C000',
        color: '#1a1a1a',
      }}
      {...rest}
    >
      <HStack spacing="4">
        <Icon as={icon} fontSize="lg" opacity={0.64} />
        <Text as="span">{label}</Text>
      </HStack>
    </Link>
  )
}
