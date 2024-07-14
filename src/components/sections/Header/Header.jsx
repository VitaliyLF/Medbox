'use client'
import { useEffect, useState } from 'react'
import Button from '@/components/common/UI/Button/Button'
import classNames from 'classnames'
import Navigation from '@/components/common/Navigation/Navigation'
import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop'
import Logotype from '@/components/common/Logotype/Logotype'

const Header = ({
  headerContent: { logo, links, btnText, btnTextMobile } = {},
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

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
      const heroHeight = document.querySelector('.hero').offsetHeight
      const y = window.scrollY

      if (scrollToTopLink) {
        scrollToTopLink.classList.toggle('is-active', y >= heroHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const contentBlockHeader = {
    isMenuOpen,
    links,
    btnText,
    btnTextMobile,
  }

  return (
    <header className="header" id="scroll-to-top">
      <div className="header__container container">
        <div className="header__wrapper">
          <Logotype
            logoImage={logo}
            logoClass="header__logo"
            logoImageClass="header__logo-img"
          />
          <Navigation {...contentBlockHeader} />
          <Button buttonText={btnText} modifier="header" />
          <button
            className={classNames('header__burger', {
              'header__burger--active': isMenuOpen,
            })}
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenuVisibility}>
            <span className="header__burger-info" aria-hidden="true">
              Menu
            </span>
            <span className="header__burger-line"></span>
          </button>
        </div>
      </div>
      <ScrollToTop />
    </header>
  )
}

export default Header
