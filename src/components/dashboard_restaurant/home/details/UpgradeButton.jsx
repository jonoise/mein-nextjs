import { Flex, Text } from '@chakra-ui/react'

const UpgradeButton = () => {
  return (
    <Flex
      as={'button'}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      w="175px"
      h="40px"
      rounded="md"
      justify="center"
      align="center"
      color="white"
    >
      <Text fontWeight="semibold">Go PRO!</Text>
    </Flex>
  )
}

export default UpgradeButton
