import { getCurrentDate, getCurrentTime } from '../lib/dates'

const test = () => {
  return <div></div>
}

export default test

export const getServerSideProps = (context) => {
  console.log(getCurrentDate())
  console.log(getCurrentTime())
  return {
    props: {},
  }
}
