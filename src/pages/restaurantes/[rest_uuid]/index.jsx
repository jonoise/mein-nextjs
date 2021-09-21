import { useToast } from '@chakra-ui/toast'
import axiosWithJWT from '../../../lib/axios'
import socket from '../../../lib/socketConnect'

const index = ({ restaurant }) => {
  const toast = useToast()

  return <h1>{restaurant.name}</h1>
}

export default index

export const getServerSideProps = async (context) => {
  const { slug } = context.params

  const restaurant = await axiosWithJWT(
    'GET',
    `/restaurants/${slug}`,
    null,
    null
  )

  const tables = await axiosWithJWT(
    'GET',
    `/tables/?restaurant=${restaurant.uuid}`
  )

  return {
    props: {
      restaurant,
      tables,
    },
  }
}
