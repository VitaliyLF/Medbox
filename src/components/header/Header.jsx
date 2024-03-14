'use client'
import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = ({ headerContent }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
    !isMenuOpen ? disableScroll() : enableScroll()
  }

  const disableScroll = () => {
    const paddingOffset = window.innerWidth - document.documentElement.clientWidth

    document.body.classList.add('scroll-lock')
    document.body.style.paddingRight = `${paddingOffset}px`
    document.body.style.scrollBehavior = 'unset'
  }

  const enableScroll = () => {
    document.body.classList.remove('scroll-lock')
    document.body.style.paddingRight = ''
    document.body.style.scrollBehavior = ''
  }

  return (
    <header className="header header--homepage">
      <div className="header__container container">
        <div className="header__wrapper">
          <Link className="header__logo" href="/">
            <Image
              className="header__logo-img"
              src={urlFor(headerContent.headerLogo).url()}
              alt="Medbox Logo"
              title="Homepage"
              width="144"
              height="41"
              priority={true}
            />
          </Link>
          <nav
            className={`header__nav ${isMenuOpen ? 'header__nav--active' : ''}`}
            aria-label="Main navigation"
            title="Use to navigation"
          >
            <ul className="header__nav-list">
              {headerContent.headerLinks?.map((link, index) => (
                <li className="header__nav-item" key={index}>
                  <Link className="header__nav-link link" href="#">
                    {link.headerLinksText}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header__mobile">
              <button className="header__mobile-btn btn" type="button" aria-hidden="true">
                {headerContent.headerBtnText}
              </button>
              <a className="header__mobile-link btn btn--phone" href="tel:8663537856" aria-hidden="true">
                {headerContent.headerMobileBtnText}
              </a>
            </div>
          </nav>
          <button className="header__btn btn" type="button">
            {headerContent.headerBtnText}
          </button>
          <button
            className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span className="header__burger-info" aria-hidden="true">
              Menu
            </span>
            <span className="header__burger-line"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
