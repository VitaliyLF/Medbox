'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const FooterContactSublist = ({ item }) => {
  const currentPath = usePathname()

  return (
    <>
      {item?.sublist && (
        <ul className="footer__contact-sublist">
          <li className="footer__contact-item">
            {item?.sublist?.map((link) => {
              const isActive = currentPath === link.href

              return (
                <Link
                  className={
                    isActive
                      ? 'link link--nav-footer-active'
                      : 'link link--light'
                  }
                  href={link.href || ''}
                  key={link._key}>
                  {link.linkText}
                </Link>
              )
            })}
          </li>
        </ul>
      )}
    </>
  )
}
export default FooterContactSublist
