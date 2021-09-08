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
} from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import useDishModalStore from '../dishModalStore'
import axiosWithJWT from '../../../lib/axios'
const DishModal = () => {
  const isOpen = useDishModalStore((state) => state.isOpen)
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
        <DrawerContent bg={styles.dimWhite} color="black">
          <DrawerHeader borderBottomWidth="1px" borderColor="black">
            <Flex w="full" justify="space-between">
              <Text>{dish && dish.name}</Text>
              <Button onClick={onClose}>
                <FaTimes />
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody p="0">
            {!isLoading && dish ? (
              <Stack spacing="24px">
                <VStack spacing="1" bg="red">
                  <Flex w="full" maxH="300px">
                    <Image src={dish.image} w="100%" objectFit="cover" />
                  </Flex>
                </VStack>
                <Stack fontSize="16px">
                  <Text color={styles.black}>{dish.description}</Text>
                </Stack>
              </Stack>
            ) : (
              'loading...'
            )}
          </DrawerBody>
        </DrawerContent>
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
