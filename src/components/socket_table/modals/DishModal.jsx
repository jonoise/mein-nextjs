import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Stack,
  Button,
  Text,
  Image,
  Flex,
  Spinner,
} from '@chakra-ui/react'
import { FaArrowLeft } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import useDishModalStore from '../dishModalStore'
import axiosWithJWT from '../../../lib/axios'
import useTableStore from '../tableStore'
const DishModal = () => {
  // TODO: THIS COMPONENT HAS A SPINNER THAT NEEDS TO BE REFACTORED
  const isOpen = useDishModalStore((state) => state.isOpen)
  const stateCategory = useTableStore((state) => state.stateCategory)
  const setIsOpen = useDishModalStore((state) => state.setIsOpen)
  const currentDishUUID = useDishModalStore((state) => state.currentDishUUID)
  const setCurrentDishUUID = useDishModalStore(
    (state) => state.setCurrentDishUUID
  )
  const firstField = useRef()

  const [dish, setDish] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (currentDishUUID) {
      setIsLoading(true)
      const fetchCurrentDish = async () => {
        const backend_dish = await axiosWithJWT(
          'GET',
          `/dishes/${currentDishUUID}`,
          null,
          null
        )
        setDish(backend_dish)
        setIsLoading(false)
      }
      fetchCurrentDish()
    }
  }, [currentDishUUID])

  const onClose = () => {
    setCurrentDishUUID(null)
    setIsLoading(false)
    setIsOpen(false)
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        size="full"
      >
        <DrawerOverlay />
        {dish && !isLoading ? (
          <DrawerContent bg={styles.dimWhite} color="black">
            <DrawerHeader borderBottomWidth="1px" borderColor="black">
              <Flex w="full" align="center">
                <Button leftIcon={<FaArrowLeft />} onClick={onClose}>
                  <Text>{stateCategory}</Text>
                </Button>
              </Flex>
            </DrawerHeader>
            <DrawerBody p="0">
              <Stack spacing="24px">
                <VStack spacing="1" bg="red">
                  <Flex w="full" maxH="300px">
                    <Image src={dish.image} w="100%" objectFit="cover" />
                  </Flex>
                </VStack>
                <Stack fontSize="16px" px="2">
                  <Text color={styles.black} fontSize="30px" fontWeight="bold">
                    {dish.name}
                  </Text>
                  <Text fontSize="16px" color="#505050">
                    {dish.description}
                  </Text>
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        ) : (
          <DrawerContent>
            <DrawerBody p="0">
              <Flex w="full" h="full" justify="center" align="center">
                <Spinner
                  size="xl"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        )}
      </Drawer>
    </>
  )
}

export default DishModal

const styles = {
  yellow: '#f5c000',
  blue: '#5267f6',
  green: '#6afdef',
  purple: '#8d2ef0',
  red: '#ec7965',
  black: '#1a1a1a',
  dimWhite: '#f2f2f2',
}
