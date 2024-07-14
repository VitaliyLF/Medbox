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
  )
}
export default NavigationList
