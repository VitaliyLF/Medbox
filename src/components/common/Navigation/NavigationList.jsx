import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigationList = ({ links }) => {
  const currentPath = usePathname()

  return (
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
                  className={classNames('nav__link link', {
                    'link--nav-external': isExternal,
                  })}
                  href={link.href}
                  title="Payment Portal || New window"
                  target="_blank">
                  {link.text}
                </Link>
              ) : (
                <Link
                  className={classNames('nav__link link', {
                    'link--nav-active': isActive,
                  })}
                  href={link.href}>
                  {link.text}
                </Link>
              )}
            </li>
          )
        })}
    </ul>
  )
}
export default NavigationList
