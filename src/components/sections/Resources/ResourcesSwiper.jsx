'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import BlogPost from '../../common/BlogPost/BlogPost'

const ResourcesSwiper = ({ list }) => {
  return (
    <Swiper
      className="resources__slider"
      modules={[Navigation, A11y, Keyboard]}
      preventClicks={true}
      preventInteractionOnTransition={true}
      spaceBetween={30}
      slidesPerView={2}
      slidesPerGroup={1}
      navigation={true}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      }}
      a11y={{
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
      }}>
      {list?.length > 0 &&
        list.map((post) => (
          <SwiperSlide key={post._key}>
            <BlogPost post={post} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
export default ResourcesSwiper
