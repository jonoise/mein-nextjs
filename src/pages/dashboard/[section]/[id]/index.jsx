import { getSession } from 'next-auth/client'
import { App } from '../../../components/dashboardShell/App'

const RestSlug = (props) => {
  return <App />
}

export default RestSlug

export const getServerSideProps = async (context) => {
  const { req } = await context

  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
