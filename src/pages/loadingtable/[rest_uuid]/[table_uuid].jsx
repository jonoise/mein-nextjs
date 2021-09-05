import axiosWithJWT from '../../../lib/axios'

const table_uuid = () => {
  return <div></div>
}

export default table_uuid

export const getServerSideProps = async (context) => {
  const { rest_uuid, table_uuid, res } = context.query
  try {
    const instance = await axiosWithJWT(
      'POST',
      `/table-instances/availability/`,
      { table_uuid },
      null
    )
    return {
      redirect: {
        destination: `/restaurantes/${instance.restaurant}/mesa/${instance.tableNumber}/${instance.uuid}`,
        permanent: false,
      },
    }
  } catch (error) {
    // handle error for client
  }
}
