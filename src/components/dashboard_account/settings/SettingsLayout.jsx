import { VStack, Divider } from '@chakra-ui/react'
import { useEffect } from 'react'
import useGeneralDashboardStore from '../../../stores/generalDashboardStore'
import Welcome from '../general/Welcome'
import App from '../sidebar_dashboard/App'

const SettingsLayout = () => {
  const setDashboardSection = useGeneralDashboardStore(
    (state) => state.setDashboardSection
  )

  useEffect(() => {
    setDashboardSection('settings')
  }, [])
  return <App Compo={Compo} />
}

export default SettingsLayout

const Compo = () => {
  return (
    <VStack flex="1" p="6" bg="#f4f4f4" maxW={{ base: 'full', md: 'full' }}>
      <Welcome />
      <Divider border="5px" />
    </VStack>
  )
}
