import { getSession } from 'next-auth/client'
import axiosWithJWT from '../../../lib/axios'
import GenericHead from '../../../components/generichead/GenericHead'
const ResturantDetail = ({ rest }) => {
  return (
    <>
      <GenericHead title={`Restaurante - ${rest.name}`} />
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

  return {
    props: { rest },
  }
}
