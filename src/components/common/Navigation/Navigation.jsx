import Link from 'next/link'
import classNames from 'classnames'
import NavigationList from './NavigationList'
import Button from '../UI/Button/Button'

const Navigation = ({ isMenuOpen, links, btnText, btnTextMobile }) => {
  return (
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
  )
}
export default Navigation
