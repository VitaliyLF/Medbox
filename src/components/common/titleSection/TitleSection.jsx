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

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { x: -1200 },
        {
          x: 0,
          duration: 0.5,
          delay: 0.2
        }
      )
    },
    { scope: container }
  )

  // useGSAP(
  //   () => {
  //     gsap.to(container.current, {
  //       scrollTrigger: {
  //         trigger: container.current,
  //         scrub: true,
  //         markers: true,
  //         x: 500
  //       }
  //     })
  //   },
  //   { scope: container }
  // )

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
