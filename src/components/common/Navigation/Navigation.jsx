import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

const Navigation = ({ isMenuOpen, links, btnText, btnTextMobile }) => {
  const currentPath = usePathname()

  return (
    <nav
      className={classNames('nav', {
        'nav--active': isMenuOpen,
      })}
      aria-label="Main navigation"
      title="Use to navigation">
      <ul className="nav__list">
        {links?.length > 0 &&
          links.map((link) => {
            const isActive = currentPath === link.href
            const isExternal =
              link.href === 'https://www.billpaysafely.com/medbox'

            return (
              <li className="nav__item" key={link._key}>
                {isExternal ? (
                  <Link
                    className={isExternal ? 'link link--nav-external' : ''}
                    href={link.href}
                    title="Payment Portal || New window"
                    target="_blank">
                    {link.text}
                  </Link>
                ) : (
                  <Link
                    className={isActive ? 'link link--nav-active' : 'link'}
                    href={link.href}>
                    {link.text}
                  </Link>
                )}
              </li>
            )
          })}
      </ul>
      <div className="nav-mobile">
        {Boolean(btnText) && (
          <button className="btn" type="button" aria-hidden="true">
            {btnText}
          </button>
        )}
        {Boolean(btnTextMobile) && (
          <Link
            className="btn btn--phone"
            href="tel:8663537856"
            aria-hidden="true">
            {btnTextMobile}
          </Link>
        )}
      </div>
    </nav>
  )
}
export default Navigation
