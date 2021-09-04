import axiosWithJWT from '../../../../../lib/axios'
import TableLayout from '../../../../../components/socket_table/TableLayout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setTableInstance } from '../../../../../components/socket_table/tableSlice'

const TableInstance = (props) => {
  const { tableInstance } = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTableInstance(tableInstance))
  })

  return <TableLayout />
}

export default TableInstance

export const getServerSideProps = async (context) => {
  const { slug, id, tableInstance } = context.params
  // DO VERIFICATION WITH SERVER FOR THIS TABLE INSTACE

  const res = await axiosWithJWT(
    'POST',
    `/table-instances/reject/`,
    { tableInstance },
    null
  )

  if (res.reject) {
    return {
      redirect: {
        destination: `/sorry`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      slug,
      id,
      tableInstance,
    },
  }
}
