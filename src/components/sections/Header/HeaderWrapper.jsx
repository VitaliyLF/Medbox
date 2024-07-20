'use client'

import Logotype from '@/components/common/Logotype/Logotype'
import Navigation from '@/components/common/Navigation/Navigation'
import Button from '@/components/common/UI/Button/Button'
import classNames from 'classnames'
import { useState } from 'react'

const HeaderWrapper = ({ logo, links, btnText, btnTextMobile }) => {
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

  return (
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
  )
}
export default HeaderWrapper
