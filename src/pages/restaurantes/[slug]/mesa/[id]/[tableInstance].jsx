import { io } from 'socket.io-client'
import { useToast } from '@chakra-ui/toast'
import axiosWithJWT from '../../../../../lib/axios'
const socket = io('http://localhost:4000')

const TableInstance = (props) => {
  const { tableInstance } = props
  const toast = useToast()

  socket.on('connect', () => {
    socket.emit('new-user', tableInstance, 'Marito Mortadela')
  })

  socket.on('new-user', (user) => {
    toast({
      id: user,
      title: `${user} ingresó a la mesa.`,
      position: 'top',
    })
  })

  const handleLog = () => {}

  return (
    <div>
      <button
        onClick={handleLog}
        style={{ padding: '10px', background: 'yellow' }}
      >
        log
      </button>
    </div>
  )
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
