import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Link,
} from '@chakra-ui/react'
import { signIn } from 'next-auth/client'

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = (values) => {
    setIsSubmitting(true)
    signIn('credentials', {
      email: values.email,
      password: values.password,
      provider: 'credentials',
      type_of: 'register',
      callbackUrl: `${window.location.origin}/login`,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text mt="2" mb="6" align="center">
        o, crea una cuenta con tu correo electrónico.
      </Text>

      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="nombre@miempresa.com"
          {...register('email', {
            required: 'Este campos es requerido.',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Ingresa un correo válido',
            },
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor="email">Contraseña</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="constraseña"
          {...register('password', {
            required: 'Este campos es requerido.',
            minLength: { value: 8, message: 'Mínimo 8 letras.' },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Text textAlign="right">
        Ya tienes cuenta?{' '}
        <Link color="blue.600" href="/register">
          Entrar
        </Link>
        .
      </Text>

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
        Crear
      </Button>
    </form>
  )
}

export default RegisterForm
