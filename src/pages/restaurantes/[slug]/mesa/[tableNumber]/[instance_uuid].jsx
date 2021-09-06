import axiosWithJWT from '../../../../../lib/axios'
import TableLayout from '../../../../../components/socket_table/TableLayout'
import { useEffect } from 'react'
import { useToast } from '@chakra-ui/toast'
import socket from '../../../../../components/socket_table/socketConnect'
import useTableStore from '../../../../../components/socket_table/tableStore'

const Instance_Uuid = ({ tableNumber, instance_uuid }) => {
  const initTable = useTableStore((state) => state.initTable)
  const toast = useToast()
  useEffect(() => {
    socket.connect('/')
    socket.emit('joinTable', instance_uuid)
    initTable({ instance_uuid, tableNumber })

    return () => {
      socket.disconnect()
    }
  }, [])

  socket.on('connect', () => {
    socket.emit('new-user', instance_uuid)
  })

  socket.on('userAdded', (user) => {
    console.log(user)
    toast({
      id: user,
      title: `${user.name} se unió a la mesa.`,
      position: 'top',
      status: 'success',
    })
  })

  return <TableLayout />
}

export default Instance_Uuid

export const getServerSideProps = async (context) => {
  const { slug, tableNumber, instance_uuid } = context.params
  // DO VERIFICATION WITH SERVER FOR THIS TABLE INSTACE

  const res = await axiosWithJWT(
    'POST',
    `/table-instances/reject/`,
    { instance_uuid },
    null
  )

  if (res.reject) {
    return {
      redirect: {
        destination: `/sorry`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      slug,
      tableNumber,
      instance_uuid,
    },
  }
}
