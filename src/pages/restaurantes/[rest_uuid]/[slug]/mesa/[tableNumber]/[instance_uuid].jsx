import axiosWithJWT from '../../../../../../lib/axios'
import TableLayout from '../../../../../../components/socket_table/TableLayout'
import { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/toast'
import socket from '../../../../../../components/socket_table/socketConnect'
import useTableStore from '../../../../../../stores/tableStore'

const Instance_Uuid = ({ rest_uuid, tableNumber, instance_uuid }) => {
  const [rest_exists, set_Rest_Exists] = useState(null)
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

  // USE EFFECT PARA HACER FETCH DEL REST
  useEffect(() => {
    const fetchRestaurant = async () => {
      const restaurant = await axiosWithJWT(
        'GET',
        `/restaurants/${rest_uuid}`,
        null,
        null
      )
      setRestaurant(restaurant)
      set_Rest_Exists(restaurant)
    }
    fetchRestaurant()
  }, [])

  // USE EFFECT PARA HACER FETCH DEL MENU SI YA EL REST FUE FETCHEADO
  useEffect(() => {
    if (rest_exists) {
      const fetchMenu = async () => {
        const menu = await axiosWithJWT(
          'GET',
          `/menus/${rest_exists.main_menu}`,
          null,
          null
        )
        setMenu(menu)
      }
      fetchMenu()
    }
  }, [rest_exists])

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
  const { rest_uuid, slug, tableNumber, instance_uuid } = context.params
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
      rest_uuid,
      slug,
      tableNumber,
      instance_uuid,
    },
  }
}
