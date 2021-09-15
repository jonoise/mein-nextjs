import { Text, Flex, VStack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const AddCard = ({ onOpen }) => {
  const handleAddRestaurantModal = () => {
    onOpen()
  }
  return (
    <Flex
      minW="280px"
      h="full"
      bg="#f4f4f4"
      color="#d0d0d0"
      rounded="md"
      p="5"
      border="3px dashed #d0d0d0"
      cursor="pointer"
      onClick={handleAddRestaurantModal}
    >
      <VStack w="full" h="full" justify="center" align="center">
        <Flex rounded="full" p="10" border="3px dashed #d0d0d0">
          <AddIcon color="#d0d0d0" />
        </Flex>
        <Text>Agregar Restaurante</Text>
      </VStack>
    </Flex>
  )
}

export default AddCard
