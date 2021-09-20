import IndexLayout from '../../components/dashboard_account/home/IndexLayout'
import { getSession, useSession } from 'next-auth/client'
import GenericHead from '../../components/generichead/GenericHead'

const index = () => {
  return (
    <>
      <GenericHead title="Mein - Dashboard" />
      <IndexLayout />
    </>
  )
}

export default index

export const getServerSideProps = async (context) => {
  const { req } = context

  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  console.log(session.user)
  if (!session.user.is_owner) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
