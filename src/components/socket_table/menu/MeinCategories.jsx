// import Swiper core and required modules
import { Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useTableStore from '../tableStore'
const MeinCategories = () => {
  const restaurant = useTableStore((state) => state.restaurant)
  SwiperCore.use([Navigation, Scrollbar, A11y])

  const [swiperSlideWidth, setSwiperSlideWidth] = useState(0)
  const onSwiper = (swiper) => {
    setSwiperSlideWidth(swiper.width)
  }

  return (
    <Flex p="2">
      <Swiper
        loop={true}
        slidesPerView={1}
        onSwiper={(swiper) => onSwiper(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="mySwiper"
      >
        <SwiperSlide>
          <Text bg="red">ASD</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>ASD</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>ASD</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>ASD</Text>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}

export default MeinCategories
