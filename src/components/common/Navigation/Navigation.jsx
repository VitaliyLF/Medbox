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

            return (
              <li className="nav_-item" key={link._key}>
                <Link
                  className={isActive ? 'link link--active' : 'link'}
                  href={link.href}>
                  {link.text}
                </Link>
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
