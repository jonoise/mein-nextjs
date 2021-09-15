import SettingsLayout from '../../components/dashboard/settings/SettingsLayout'
import { getSession } from 'next-auth/client'
import GenericHead from '../../components/generichead/GenericHead'

const settings = () => {
  return (
    <>
      <GenericHead title="Mein - Dashboard" />
      <SettingsLayout />
    </>
  )
}

export default settings

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
