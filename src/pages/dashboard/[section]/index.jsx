import { getSession } from 'next-auth/client'
import { useEffect } from 'react'
import { App } from '../../../components/dashboard/shell/App'
import useDashboardStore from '../../../stores/dashboardStore'
const RestSlug = ({ section }) => {
  const setDashboardSection = useDashboardStore(
    (state) => state.setDashboardSection
  )

  useEffect(() => {
    setDashboardSection(section)
  }, [setDashboardSection])

  return <App />
}

export default RestSlug

export const getServerSideProps = async (context) => {
  const { req } = await context
  const { section } = await context.query

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
    props: {
      section,
    },
  }
}
