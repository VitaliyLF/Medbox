'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './TitleSection.scss'

const TitleSection = ({ children, modifier, animate = true }) => {
  const container = useRef(null)
  const cx = classNames.bind(styles)

  const titleClassName = cx({
    'title-section': true,
    [`title-section--${modifier}`]: modifier,
  })

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(
    () => {
      if (animate) {
        gsap.fromTo(
          container.current,
          {
            y: 50,
            // opacity: 0,
            duration: 0.25,
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: container.current,
              // markers: true,
              start: 'center center',
              toggleActions: 'play play none pause',
            },
          },
        )
      }
    },
    { scope: container },
  )

  return (
    <h2 ref={container} className={titleClassName}>
      {children}
    </h2>
  )
}

export default TitleSection
