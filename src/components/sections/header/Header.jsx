'use client'
import { urlFor } from '@/app/lib/clientSanity'
import Button from '@/components/common/button/Button'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames'

const Header = ({ headerContent }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const { logo, links, btnText, btnTextMobile } = headerContent ?? {}
  const dimensions = logo?.asset ? decodeAssetId(logo.asset._ref).dimensions : null

  const toggleMenuVisibility = () => {
    setMenuOpen(!isMenuOpen)
    toggleScroll()
  }

  const toggleScroll = () => {
    const paddingOffset = window.innerWidth - document.documentElement.clientWidth
    document.body.classList.toggle('scroll-lock')
    document.body.style.paddingRight = isMenuOpen ? '' : `${paddingOffset}px`
    document.body.style.scrollBehavior = isMenuOpen ? '' : 'unset'
  }

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__wrapper">
          {logo && (
            <Link className="header__logo" href="/">
              <Image
                className="header__logo-img"
                src={urlFor(logo).url()}
                alt="Medbox Logo"
                title="Homepage"
                width={dimensions.width}
                height={dimensions.height}
                priority={true}
              />
            </Link>
          )}
          <nav
            className={classNames('header__nav', { 'header__nav--active': isMenuOpen })}
            aria-label="Main navigation"
            title="Use to navigation">
            <ul className="header__nav-list">
              {links?.map((link) => (
                <li className="header__nav-item" key={link._key}>
                  <Link className="link" href="#">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header__mobile">
              {btnText && (
                <button className="header__mobile-btn btn" type="button" aria-hidden="true">
                  {btnText}
                </button>
              )}
              {btnTextMobile && (
                <Link className="header__mobile-link btn btn--phone" href="tel:8663537856" aria-hidden="true">
                  {btnTextMobile}
                </Link>
              )}
            </div>
          </nav>
          <Button buttonText={btnText} modifier="header" />
          <button
            className={classNames('header__burger', { 'header__burger--active': isMenuOpen })}
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
    </header>
  )
}

export default Header
