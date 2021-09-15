import { Flex, VStack, Divider } from '@chakra-ui/react'
import { MobileTopBar } from './MobileTopBar'
import { Sidebar } from './Sidebar'

const App = (props) => {
  return (
    <Flex minH="100vh" flexDirection="column" w="full">
      <MobileTopBar />
      <Flex flex="1" overflow="hidden">
        <Sidebar
          display={{ base: 'none', md: 'flex' }}
          position="fixed"
          h="100vh"
          width="64"
        />
        <Flex ml={{ base: '0', md: '64' }} w="full">
          <props.Compo />
          {props.SideCompo && <props.SideCompo />}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
