import ProfileLayout from '../../components/dashboard_account/profile/ProfileLayout'
import { getSession, useSession } from 'next-auth/client'
import GenericHead from '../../components/generichead/GenericHead'

const profile = () => {
  return (
    <>
      <GenericHead title="Mein - Dashboard" />
      <ProfileLayout />
    </>
  )
}

export default profile

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

  return {
    props: {},
  }
}
