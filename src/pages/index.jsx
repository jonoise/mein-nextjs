import { Flex } from '@chakra-ui/react'
import DefaultHead from '../components/head/DefaultHead'
import HomeLayout from '../components/home/HomeLayout'

export default function Home() {
  return (
    <>
      <DefaultHead>
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </DefaultHead>
      <HomeLayout />
      <Flex w="full" minH="100vh"></Flex>
    </>
  )
}
