'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './TitleSection.scss'

gsap.registerPlugin(ScrollTrigger)
const cx = classNames.bind(styles)

const TitleSection = ({ titleSection, modifier }) => {
  const container = useRef(null)

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       container.current,
  //       { opacity: 0, y: 40 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.5,
  //         delay: 0.2,
  //         scrollTrigger: {
  //           trigger: container.current,
  //           markers: true,
  //           start: 'top 80%', // Когда верх элемента достигает 80% от высоты окна
  //           end: 'bottom 20%', // Когда низ элемента достигает 20% от высоты окна
  //           scrub: true // Анимация будет привязана к скроллу
  //         }
  //       }
  //     )
  //   },
  //   { scope: container }
  // )

  useGSAP(
    () => {
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          markers: true,
          x: 500
        }
      })
    },
    { scope: container }
  )

  if (!titleSection) return null

  const className = cx({
    'title-section': true,
    [`title-section--${modifier}`]: modifier
  })

  return (
    <h2 ref={container} className={className}>
      {titleSection}
    </h2>
  )
}

export default TitleSection
