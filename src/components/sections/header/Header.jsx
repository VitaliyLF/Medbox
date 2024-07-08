'use client'
import { urlFor } from '@/app/lib/clientSanity'
import Button from '@/components/common/button/Button'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

const Header = ({
  headerContent: { logo, links, btnText, btnTextMobile } = {},
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const logoDimensions = logo?.asset
    ? decodeAssetId(logo.asset._ref).dimensions
    : null

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
      const scrollToTopLink = document.querySelector('.header__scroll-link')
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

  const ScrollIcon = () => (
    <svg
      className="footer__scroll-icon"
      width="30"
      height="39"
      viewBox="0 0 30 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2756 4.53825L16.2756 37.3316C16.2756 38.1269 15.6309 38.7716 14.8356 38.7716C14.0403 38.7716 13.3956 38.1269 13.3956 37.3316L13.3956 4.53826L2.83225 13.9279C2.23784 14.4562 1.32765 14.4027 0.799292 13.8083C0.27093 13.2139 0.32447 12.3037 0.918877 11.7753L12.6033 1.38918C13.8764 0.257575 15.7948 0.257575 17.0678 1.38918L28.7522 11.7753C29.3466 12.3037 29.4002 13.2139 28.8718 13.8083C28.3435 14.4027 27.4333 14.4562 26.8389 13.9279L16.2756 4.53825Z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <header className="header" id="scroll-to-top">
      <div className="header__container container">
        <div className="header__wrapper">
          {logo && (
            <Link className="header__logo" href="/">
              <Image
                className="header__logo-img"
                src={urlFor(logo).url()}
                alt="Medbox Logo"
                title="Homepage"
                width={logoDimensions.width || 0}
                height={logoDimensions.height || 0}
                loading="lazy"
              />
            </Link>
          )}
          <nav
            className={classNames('header__nav', {
              'header__nav--active': isMenuOpen,
            })}
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
              {Boolean(btnText) && (
                <button
                  className="header__mobile-btn btn"
                  type="button"
                  aria-hidden="true">
                  {btnText}
                </button>
              )}
              {Boolean(btnTextMobile) && (
                <Link
                  className="header__mobile-link btn btn--phone"
                  href="tel:8663537856"
                  aria-hidden="true">
                  {btnTextMobile}
                </Link>
              )}
            </div>
          </nav>
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
      <a
        className="header__scroll-link"
        href="#scroll-to-top"
        title="Scroll to top">
        <ScrollIcon />
        Scroll to top
      </a>
    </header>
  )
}

export default Header
