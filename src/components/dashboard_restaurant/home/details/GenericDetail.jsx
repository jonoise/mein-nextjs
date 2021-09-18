import { Stack, Flex, Text, Divider } from '@chakra-ui/react'

const GenericDetail = ({ title, value }) => {
  return (
    <>
      <Stack>
        <Flex>
          <Text mr="2" fontWeight="semibold">
            {title}:
          </Text>
          <Text>{value}</Text>
        </Flex>
        <Divider />
      </Stack>
    </>
  )
}

export default GenericDetail
