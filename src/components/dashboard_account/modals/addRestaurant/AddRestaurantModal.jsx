import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import Form from './Form'

const AddRestaurantModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agrega un nuevo restaurante</ModalHeader>
          <ModalCloseButton />
          <ModalBody py="5">
            <Form onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddRestaurantModal
