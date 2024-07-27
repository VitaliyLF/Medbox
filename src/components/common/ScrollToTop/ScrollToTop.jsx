'use client'

import ScrollIcon from '@/app/assets/img/scroll-icon.svg'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero')

      if (heroSection) {
        const heroSectionHeight = heroSection.offsetHeight
        setIsActive(window.scrollY >= heroSectionHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <a
      className={classNames('scroll-link', {
        'is-active': isActive,
      })}
      href="#scroll-to-top"
      title="Scroll to top">
      <ScrollIcon className="scroll-link__icon" />
      Scroll to top
    </a>
  )
}
export default ScrollToTop
