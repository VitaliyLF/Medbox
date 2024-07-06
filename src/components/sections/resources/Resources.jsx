'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import BlogPost from '../../common/blogPost/BlogPost'
import ContentBlock from '@/components/common/сontentBlock/ContentBlock'

const Resources = ({
  resourcesContent: { subtitle, text, linkText, url, list } = {},
}) => {
  const contentBlockResources = {
    contentClassName: 'resources__content',
    subtitleModifier: 'large',
    textModifier: 'medium',
    subtitle,
    text,
    url,
    linkText,
  }

  const swiperResourcesSettings = {
    className: 'resources__slider',
    modules: [Navigation, A11y, Keyboard],
    preventClicks: true,
    preventInteractionOnTransition: true,
    spaceBetween: 30,
    slidesPerView: 2,
    slidesPerGroup: 1,
    navigation: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
    },
  }

  return (
    <section className="resources">
      <div className="resources__container container">
        <ContentBlock {...contentBlockResources} />
        <div className="resources__wrapper">
          <Swiper {...swiperResourcesSettings}>
            {list?.map((post) => (
              <SwiperSlide key={post._key}>
                <BlogPost post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Resources
