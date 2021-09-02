const tableInstance = () => {
  return <div>res</div>
}

export default tableInstance

export const getServerSideProps = async (context) => {
  const { slug, id, tableInstance } = context.params
  // DO VERIFICATION WITH SERVER FOR THIS TABLE INSTACE
  return { props: {} }
}
