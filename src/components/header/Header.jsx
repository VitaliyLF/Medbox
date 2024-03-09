import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ headerContent }) => {
  return (
    <header className="header header--homepage">
      <div className="header__container container">
        <div className="header__wrapper">
          <Link className="header__logo" href="#" title="Homepage">
            <Image
              className="header__logo-img"
              src={urlFor(headerContent.headerLogo).url()}
              alt="Medbox Logo"
              width={144}
              height={41}
            />
          </Link>
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              {headerContent.headerLinks.map((link, index) => (
                <li className="header__nav-item" key={index}>
                  <Link className="header__nav-link link" href="#">
                    {link.headerLinksText}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header__mobile">
              <button className="header__mobile-btn btn" type="button" aria-hidden="true">
                Check My Coverage
              </button>
              <a className="header__mobile-link btn btn--phone" href="tel:8663537856" aria-hidden="true">
                Call Us
              </a>
            </div>
          </nav>
          <button className="header__btn btn" type="button">
            Check My Coverage
          </button>
          <button className="header__burger" type="button" aria-label="Open menu" aria-expanded="false" data-burger>
            <span className="header__burger-info" data-menu-text aria-hidden="true">
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
