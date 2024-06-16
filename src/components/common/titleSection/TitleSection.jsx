'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './TitleSection.scss'

gsap.registerPlugin(ScrollTrigger)
const cx = classNames.bind(styles)

const TitleSection = ({ titleSection, modifier, animate = true }) => {
  const container = useRef(null)

  useGSAP(
    () => {
      if (animate) {
        gsap.fromTo(
          container.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.25
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: container.current,
              start: 'center center',
              toggleActions: 'restart pause restart pause'
            }
          }
        )
      }
    },
    { scope: container }
  )

  if (!titleSection) return null

  const titleClassName = cx({
    'title-section': true,
    [`title-section--${modifier}`]: modifier
  })

  return (
    <h2 ref={container} className={titleClassName}>
      {titleSection}
    </h2>
  )
}

export default TitleSection
