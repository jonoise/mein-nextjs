const cargando = () => {
  return <h1>cargando</h1>
}

export default cargando

export const getServerSideProps = async (context) => {
  const { slug, id } = context.params
  // REVISAR SI HAY UNA INSTANCIA ACTIVA, SI LA HAY LA DEVUELVE, SI NO LA CREA.
  return { props: {} }
}
