import { Box, Flex } from '@chakra-ui/react'
import { MobileTopBar } from './MobileTopBar'
import { Sidebar } from './Sidebar'

export const App = (props) => {
  const { WindowComponent } = props
  return (
    <Flex h="100vh" flexDirection="column" w="full">
      <MobileTopBar />
      <Flex flex="1" overflow="hidden">
        <Sidebar display={{ base: 'none', md: 'flex' }} />
        <Flex flex="1" p="6">
          <WindowComponent />
        </Flex>
      </Flex>
    </Flex>
  )
}
