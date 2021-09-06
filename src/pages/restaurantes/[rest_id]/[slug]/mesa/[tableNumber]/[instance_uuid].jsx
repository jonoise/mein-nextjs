import axiosWithJWT from '../../../../../../lib/axios'
import TableLayout from '../../../../../../components/socket_table/TableLayout'
import { useEffect } from 'react'
import { useToast } from '@chakra-ui/toast'
import socket from '../../../../../../components/socket_table/socketConnect'
import useTableStore from '../../../../../../components/socket_table/tableStore'

const Instance_Uuid = ({ rest_id, tableNumber, instance_uuid }) => {
  const initTable = useTableStore((state) => state.initTable)
  const setRestaurant = useTableStore((state) => state.setRestaurant)
  const setMenu = useTableStore((state) => state.setMenu)
  const toast = useToast()
  useEffect(() => {
    socket.connect('/')
    socket.emit('joinTable', instance_uuid)
    initTable({ instance_uuid, tableNumber })

    return () => {
      socket.disconnect()
    }
  }, [])
  useEffect(() => {
    const fetchRestaurantAndMenu = async () => {
      const restaurant = await axiosWithJWT(
        'GET',
        `/restaurants/${rest_id}`,
        null,
        null
      )
      const menu = await axiosWithJWT(
        'GET',
        `/menus/${restaurant.main_menu}`,
        null,
        null
      )
      setRestaurant(restaurant)
      setMenu(menu)
    }
    fetchRestaurantAndMenu()
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
  const { rest_id, slug, tableNumber, instance_uuid } = context.params
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
      rest_id,
      slug,
      tableNumber,
      instance_uuid,
    },
  }
}
