import PlansLayout from '../../components/dashboard/plans/PlansLayout'
import { getSession, useSession } from 'next-auth/client'
import GenericHead from '../../components/generichead/GenericHead'

const plans = () => {
  return (
    <>
      <GenericHead title="Mein - Dashboard" />
      <PlansLayout />
    </>
  )
}

export default plans

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
