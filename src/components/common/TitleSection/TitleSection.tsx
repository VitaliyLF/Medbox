'use client'

import { useGSAP } from '@gsap/react'
import classNames from 'classnames/bind'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { FC, useRef } from 'react'
import styles from './TitleSection.scss'

interface Props {
  children?: React.ReactNode
  modifier?: string
  animate?: boolean
}

const TitleSection: FC<Props> = ({ children, modifier, animate = true }) => {
  const container = useRef<HTMLHeadingElement | null>(null)
  const cx = classNames.bind(styles)

  const titleClassName = cx({
    'title-section': true,
    [`title-section--${modifier}`]: modifier,
  })

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(
    () => {
      if (animate) {
        gsap.to(container.current, {
          y: 0,
          opacity: 1,
          duration: 0.25,
          scrollTrigger: {
            trigger: container.current,
            start: 'center center',
            toggleActions: 'play play none pause',
          },
        })
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
