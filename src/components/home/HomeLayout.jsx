import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import FrontImage from './hero/FrontImage'
import TextCTA from './hero/TextCTA'
import { responsiveFlexDirection, containerSection } from '../../constants'
const HomeLayout = () => {
  return (
    <Stack pt="100px" {...containerSection}>
      <Flex direction={responsiveFlexDirection}>
        <TextCTA />
        <FrontImage />
      </Flex>
    </Stack>
  )
}

export default HomeLayout
