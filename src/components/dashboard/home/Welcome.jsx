import { Button, Stack, Spinner, Text, Heading, Flex } from '@chakra-ui/react'
import { useSession } from 'next-auth/client'
import { AddIcon } from '@chakra-ui/icons'
const Welcome = ({ onOpen }) => {
  const [session, loading] = useSession()
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        session && (
          <Stack direction="column" w="full">
            <Text color="#a0a0a0">Hola, {session.user.name}</Text>
            <Saludo onOpen={onOpen} />
          </Stack>
        )
      )}
    </>
  )
}

export default Welcome

const Saludo = ({ onOpen }) => {
  const openAddRestaurantModal = () => {
    onOpen()
  }
  return (
    <Flex w="full" justify="space-between" align="flex-end">
      <Heading>Qué bueno tenerte de vuelta.</Heading>
      <Button
        onClick={openAddRestaurantModal}
        leftIcon={<AddIcon />}
        size="sm"
        colorScheme="green"
      >
        Agregar Restaurante
      </Button>
    </Flex>
  )
}
