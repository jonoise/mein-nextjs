import { Stack, Heading } from '@chakra-ui/react'
import useTableStore from './tableStore'
const Welcome = () => {
  const currentUser = useTableStore((state) => state.currentUser)

  return (
    <Stack w="full">
      <Heading>{currentUser && currentUser.name}</Heading>
    </Stack>
  )
}

export default Welcome
