import IndexLayout from '../../components/dashboard/index/IndexLayout'
import { getSession, useSession } from 'next-auth/client'

const index = () => {
  return (
    <>
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

  return {
    props: {},
  }
}
