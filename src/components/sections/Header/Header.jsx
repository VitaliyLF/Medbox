'use client'
import { useEffect, useState } from 'react'
import Button from '@/components/common/UI/Button/Button'
import classNames from 'classnames'
import Navigation from '@/components/common/Navigation/Navigation'
import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop'
import Logotype from '@/components/common/Logotype/Logotype'

const Header = ({ headerContent }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { logo, links, btnText, btnTextMobile } = headerContent ?? {}

  const toggleMenuVisibility = () => {
    setMenuOpen(!isMenuOpen)
    toggleScroll()
  }

  const toggleScroll = () => {
    const paddingOffset =
      window.innerWidth - document.documentElement.clientWidth
    document.body.classList.toggle('scroll-lock')
    document.body.style.paddingRight = isMenuOpen ? '' : `${paddingOffset}px`
    document.body.style.scrollBehavior = isMenuOpen ? '' : 'unset'
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopLink = document.querySelector('.scroll-link')
      const heroSection = document.querySelector('.hero')
      const y = window.scrollY

      if (scrollToTopLink && heroSection) {
        const heroSectionHeight = heroSection.offsetHeight
        scrollToTopLink.classList.toggle('is-active', y >= heroSectionHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="header" id="scroll-to-top">
      <div className="header__container container">
        <div className="header__wrapper">
          <Logotype
            logoImage={logo}
            logoClass="header__logo"
            logoImageClass="header__logo-img"
          />
          <Navigation
            isMenuOpen={isMenuOpen}
            links={links}
            btnText={btnText}
            btnTextMobile={btnTextMobile}
          />
          {btnText && (
            <Button modifier="header" type="button">
              {btnText}
            </Button>
          )}
          <Button
            className={classNames('burger', {
              'burger--active': isMenuOpen,
            })}
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenuVisibility}>
            <span className="burger__info" aria-hidden="true">
              {isMenuOpen ? 'Close menu' : 'Menu'}
            </span>
            <span className="burger__line"></span>
          </Button>
        </div>
      </div>
      <ScrollToTop />
    </header>
  )
}

export default Header
