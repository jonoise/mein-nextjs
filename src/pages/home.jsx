import { getSession } from 'next-auth/client'

const home = () => {
  return <div></div>
}

export default home

export const getServerSideProps = async (context) => {
  const { req, res } = context
  res.writeHead(302, {
    Location: `/`,
  })
  res.end()
  return {
    props: {},
  }
}
