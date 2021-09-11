import { App } from '../../components/dashboardShell/App'
import Navbar from '../../components/navbar/Navbar'
import { Heading, Flex } from '@chakra-ui/react'
import { getSession, useSession } from 'next-auth/client'

const index = ({ section }) => {
  const [session, loading] = useSession()
  console.log(section)
  return (
    <>
      {loading ? (
        <Flex>
          <Navbar />
          <Heading>CARGANDO</Heading>
        </Flex>
      ) : (
        session && (
          <Flex>
            <App />
          </Flex>
        )
      )}
    </>
  )
}

export default index

export const getServerSideProps = async (context) => {
  const { req, section } = context

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
    props: {
      section,
    },
  }
}
