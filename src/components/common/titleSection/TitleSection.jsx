'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './TitleSection.scss'

const cx = classNames.bind(styles)

const TitleSection = ({ titleSection, modifier }) => {
  const container = useRef()

  useGSAP(
    () => {
      gsap.fromTo(container.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
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
