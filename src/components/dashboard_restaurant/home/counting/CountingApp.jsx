import { useEffect, useState } from 'react'
import { makeArray } from './makeArray'
import restaurantStore from '../../../../stores/restaurantDetailStore'
import { VStack, Text, Flex, Spinner, HStack } from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'

const CountingApp = () => {
  const restaurant = restaurantStore((state) => state.restaurant)
  const [countingArray, setCountingArray] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setCountingArray(makeArray(restaurant && restaurant._counting))
    setLoading(false)
  }, [restaurant])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <HStack
          minW="full"
          minH="120px"
          overflowX="scroll"
          justifyContent="flex-start"
          spacing="3"
          p="2"
          className="styledScrollbar"
        >
          {countingArray.map((count) => (
            <SingleCount count={count} key={count.id} />
          ))}
        </HStack>
      )}
    </>
  )
}

export default CountingApp

const SingleCount = ({ count }) => {
  return (
    <Flex
      bg={count.color}
      minW={{ base: '30%', md: '20%' }}
      h="full"
      justify="center"
      align="center"
      rounded="md"
    >
      <VStack>
        <Text fontWeight="semibold" fontSize={{ base: '10px', md: 'inherit' }}>
          {count.name}
        </Text>
        <Text fontSize="xl">
          {count.value === null ? <MinusIcon /> : count.value}
        </Text>
      </VStack>
    </Flex>
  )
}
