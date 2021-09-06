// import Swiper core and required modules
import { Flex, Text, HStack, Image } from '@chakra-ui/react'
import { useState } from 'react'
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useTableStore from '../tableStore'
const MeinCategories = () => {
  const menu = useTableStore((state) => state.menu)
  SwiperCore.use([Navigation, Scrollbar, A11y])

  const [swiperSlideWidth, setSwiperSlideWidth] = useState(0)
  const onSwiper = (swiper) => {
    setSwiperSlideWidth(swiper.width)
  }

  return (
    <Flex p="2">
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={20}
        onSwiper={(swiper) => onSwiper(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="mySwiper"
      >
        {menu && (
          <HStack spacing="2">
            {menu._categories.map((category) => {
              return (
                <SwiperSlide key={category.id}>
                  <Flex
                    bg="green.100"
                    p="2"
                    justify="space-evenly"
                    borderRadius="md"
                  >
                    <Image src={categoryIcon[category.name]} w="30px" />
                    <Text fontWeight="semibold">{category.name}</Text>
                  </Flex>
                </SwiperSlide>
              )
            })}
          </HStack>
        )}
      </Swiper>
    </Flex>
  )
}

export default MeinCategories

const categoryIcon = {
  Carnes: '/menu_categories/meat.png',
  Mariscos: '/menu_categories/seafood.png',
  Pastas: '/menu_categories/pasta.svg',
}
