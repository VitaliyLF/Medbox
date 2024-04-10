'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import BlogPost from '../../common/blogPost/BlogPost'
import ContentBlock from '@/components/common/сontentBlock/ContentBlock'

const Resources = ({ resourcesContent }) => {
  const { subtitle, text, linkText, url, list } = resourcesContent ?? {}

  return (
    <section className="resources">
      <div className="resources__container container">
        <ContentBlock
          contentClassName="resources__content"
          subtitle={subtitle}
          subtitleModifier="large"
          text={text}
          textModifier="medium"
          linkText={linkText}
          url={url}
        />
        <div className="resources__wrapper">
          <Swiper
            className="resources__slider"
            modules={[Navigation, A11y, Keyboard]}
            preventClicks={true}
            preventInteractionOnTransition={true}
            spaceBetween={30}
            slidesPerView={2}
            slidesPerGroup={1}
            navigation
            keyboard={{
              enabled: true,
              onlyInViewport: true,
              pageUpDown: true
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide'
            }}>
            {list?.map((item) => (
              <SwiperSlide key={item._key}>
                <BlogPost source={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Resources
