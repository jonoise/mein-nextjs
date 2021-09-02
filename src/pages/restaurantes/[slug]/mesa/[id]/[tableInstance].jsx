import { io } from 'socket.io-client'

const socket = io('http://localhost:4000')
socket.on('vuelta', (saludo) => {
  console.log(saludo)
})

const tableInstance = () => {
  socket.emit('message', 'We are casting!')

  const saludar = () => {
    socket.emit('saludo', 'Yey!🎉')
  }

  return (
    <div>
      <button
        onClick={saludar}
        style={{ padding: '10px', background: 'yellow' }}
      >
        saludar
      </button>
    </div>
  )
}

export default tableInstance

export const getServerSideProps = async (context) => {
  const { slug, id, tableInstance } = context.params
  // DO VERIFICATION WITH SERVER FOR THIS TABLE INSTACE
  return { props: {} }
}
