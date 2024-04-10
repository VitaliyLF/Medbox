'use client'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import BlogPost from '../../common/blogPost/BlogPost'

const Resources = ({ resourcesContent }) => {
  if (!resourcesContent) {
    return null
  }

  const { subtitle, text, btnText, url, list } = resourcesContent

  return (
    <section className="resources">
      <div className="resources__container container">
        <div className="resources__info">
          {subtitle && <h2 className="subtitle-section subtitle-section--large">{subtitle}</h2>}
          {text && (
            <div className="text-section text-section--medium">
              <PortableText value={text} />
            </div>
          )}
          {btnText && (
            <Link className="btn" href={url}>
              {btnText}
            </Link>
          )}
        </div>
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
