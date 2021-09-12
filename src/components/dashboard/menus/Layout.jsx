import { App } from '../shell/App'
import useDashboardStore from '../../../stores/dashboardStore'
import { useEffect } from 'react'

const Layout = () => {
  const setDashboardSection = useDashboardStore(
    (state) => state.setDashboardSection
  )
  useEffect(() => {
    setDashboardSection('menus')
  }, [])
  return <App WindowComponent={Compo} />
}

export default Layout

const Compo = () => {
  return <h1>MENUS</h1>
}
