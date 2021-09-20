import { getSession } from 'next-auth/client'
import { useEffect } from 'react'
import axiosWithJWT from '../../../../../lib/axios'
import socket from '../../../../../lib/socketConnect'

const index = ({ kitchen_uuid }) => {
  useEffect(() => {
    socket.emit('getKitchen', kitchen_uuid)
  })
  return <div></div>
}

export default index

export const getServerSideProps = async (context) => {
  const { req } = context
  const { rest_uuid } = context.query
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const kitchen = await axiosWithJWT(
    'GET',
    `/kitchens/${rest_uuid}/`,
    null,
    session
  )

  if (kitchen === 'not found') {
    return {
      notFound: true,
    }
  }

  return {
    props: { kitchen_uuid: kitchen.uuid },
  }
}
