import axiosWithJWT from '../../../../../lib/axios'
import TableLayout from '../../../../../components/socket_table/TableLayout'
import { useEffect } from 'react'
import useTableStore from '../../../../../components/socket_table/tableStore'
import socket from '../../../../../components/socket_table/socketConnect'
import { useToast } from '@chakra-ui/toast'
const TableInstance = ({ tableInstance }) => {
  const initTable = useTableStore((state) => state.initTable)
  const toast = useToast()
  useEffect(() => {
    socket.connect()
    socket.emit('joinTable', tableInstance)
    initTable(tableInstance)
    return () => {
      socket.disconnect()
    }
  }, [])

  socket.on('userAdded', (user) => {
    toast({
      id: user,
      title: `${user} se unió a la mesa.`,
      position: 'top',
      status: 'success',
    })
  })

  return <TableLayout />
}

export default TableInstance

export const getServerSideProps = async (context) => {
  const { slug, id, tableInstance } = context.params
  // DO VERIFICATION WITH SERVER FOR THIS TABLE INSTACE

  const res = await axiosWithJWT(
    'POST',
    `/table-instances/reject/`,
    { tableInstance },
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
      id,
      tableInstance,
    },
  }
}
