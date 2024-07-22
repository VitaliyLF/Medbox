'use client'

import useMenuToggle from '@/hooks/useMenuToggle'
import classNames from 'classnames'
import Link from 'next/link'
import Button from '../UI/Button/Button'
import NavigationList from './NavigationList'

const Navigation = ({ links, btnText, btnTextMobile }) => {
  const { isMenuOpen, toggleMenuVisibility } = useMenuToggle()

  return (
    <>
      <nav
        className={classNames('nav', {
          'nav--active': isMenuOpen,
        })}
        aria-label="Main navigation"
        title="Use to navigation">
        <NavigationList links={links} />
        <div className="nav-mobile">
          {Boolean(btnText) && <Button type="button">{btnText}</Button>}
          {Boolean(btnTextMobile) && (
            <Link className="btn btn--phone" href="tel:8663537856">
              {btnTextMobile}
            </Link>
          )}
        </div>
      </nav>
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
    </>
  )
}
export default Navigation
