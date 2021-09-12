import { App } from '../shell/App'
import useDashboardStore from '../../../stores/dashboardStore'
import { useEffect } from 'react'

const Layout = () => {
  const setDashboardSection = useDashboardStore(
    (state) => state.setDashboardSection
  )
  useEffect(() => {
    setDashboardSection('tables')
  }, [])
  return <App WindowComponent={Compo} />
}

export default Layout

const Compo = () => {
  return <h1>hola</h1>
}
