import { getSession } from 'next-auth/client'
import axiosWithJWT from '../../../../lib/axios'
import GenericHead from '../../../../components/generichead/GenericHead'
import RestaurantDashboardLayout from '../../../../components/dashboard_restaurant/home/RestaurantDashboardLayout'
import restaurantDetailStore from '../../../../stores/restaurantDetailStore'
import { useEffect } from 'react'

const ResturantDetail = ({ rest }) => {
  const setRestaurant = restaurantDetailStore((state) => state.setRestaurant)

  useEffect(() => {
    setRestaurant(rest)
  }, [])

  return (
    <>
      <GenericHead title={`Restaurante - ${rest.name}`} />
      <RestaurantDashboardLayout />
    </>
  )
}

export default ResturantDetail

export const getServerSideProps = async (context) => {
  const { req } = context
  const { uuid } = context.query
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const rest = await axiosWithJWT('GET', `/restaurants/${uuid}/`, null, session)

  if (rest === 'not found') {
    return {
      notFound: true,
    }
  }

  return {
    props: { rest },
  }
}
