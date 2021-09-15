import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  Button,
  Icon,
  Textarea,
  Select,
  InputGroup,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/client'
import { FiFile } from 'react-icons/fi'
import axiosWithJWT from '../../../../lib/axios'
import { useRouter } from 'next/router'
const Form = ({ onClose }) => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [session, loading] = useSession()

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm()

  const onSubmit = async (values) => {
    setIsSubmitting(true)
    const data = new FormData()
    data.append('owner', session.user.user)
    data.append('name', values.name)
    data.append('welcome_message', values.welcome)
    data.append('type_of', values.type_of)
    data.append('logo', values.logo[0] ? values.logo[0] : '')

    try {
      const rest = await axiosWithJWT('POST', `/restaurants/`, data, session)
      console.log(rest)
      router.push(`/dashboard/restaurants/${rest.uuid}`)
    } catch (error) {
      const rests = await axiosWithJWT(
        'GET',
        `/restaurants/?owner=${session.user.user}`,
        null,
        session
      )
      const r = rests[0]
      router.push(`/dashboard/restaurants/${r.uuid}`)
    }
    setIsSubmitting(false)
  }

  const handleSelectType = (value) => {
    setValue('type_of', value)
  }

  const validateFiles = (value) => {
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024)
      const MAX_FILE_SIZE = 10
      if (fsMb > MAX_FILE_SIZE) {
        return 'Max file size 10mb'
      }
    }
    return true
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <Stack spacing="6">
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input
            id="name"
            placeholder="el nombre de tu restaurante"
            {...register('name', {
              required: 'Este campos es requerido.',
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.welcome}>
          <FormLabel htmlFor="welcome">Mensaje de bienevenida</FormLabel>
          <Input
            as={Textarea}
            id="welcome"
            placeholder="escribe un mensaje para recibir a tus clientes"
            {...register('welcome', {
              required: 'Este campos es requerido.',
              maxLength: { value: 140, message: 'Máximo 140 carácteres' },
            })}
          />
          <FormErrorMessage>
            {errors.welcome && errors.welcome.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="type_of">
          <FormLabel>
            Qué categoría representa mejor a tu restaurante?
          </FormLabel>
          <Select
            maxW="2xs"
            placeholder="Opcional"
            onChange={(e) => handleSelectType(e.target.value)}
          >
            <option>Familiar</option>
            <option>Típico</option>
            <option>Comida Rápida</option>
            <option>Comida Mexicana</option>
            <option>Comida China</option>
            <option>Comida Asiática</option>
            <option>Comida Italiana</option>
            <option>Pizzería</option>
            <option>Sushi Bar</option>
            <option>Asados</option>
            <option>Cantina</option>
          </Select>
          <Input hidden={true} id="type_of" {...register('type_of')} />
        </FormControl>
        <FileUpload
          accept={'image/*'}
          register={register('logo', { validate: validateFiles })}
        >
          <Button leftIcon={<Icon as={FiFile} />}>Buscar logo</Button>
        </FileUpload>
        <Text fontSize="xs">Lee las recomendaciones para logos.</Text>
      </Stack>

      <Button
        mt={4}
        bg="black"
        colorScheme="blackAlpha"
        color="white"
        isLoading={isSubmitting}
        type="submit"
        w="full"
        disabled={isSubmitting ? true : false}
      >
        Entrar
      </Button>
    </form>
  )
}

export default Form

const FileUpload = (props) => {
  const { register, accept, multiple, children } = props
  const inputRef = useRef()
  const { ref, ...rest } = register

  const handleClick = () => inputRef.current?.click()

  return (
    <FormControl id="logo">
      <FormLabel>Elige el logo de tu restaurante</FormLabel>
      <InputGroup onClick={handleClick}>
        <input
          id="logo"
          type={'file'}
          multiple={multiple || false}
          hidden
          accept={accept}
          {...rest}
          ref={(e) => {
            ref(e)
            inputRef.current = e
          }}
        />
        <>{children}</>
      </InputGroup>
    </FormControl>
  )
}
