import Logotype from '@/components/common/Logotype/Logotype'
import Navigation from '@/components/common/Navigation/Navigation'
import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop'
import Button from '@/components/common/UI/Button/Button'

const Header = ({ headerContent }) => {
  const { logo, links, btnText, btnTextMobile } = headerContent ?? {}

  return (
    <header className="header" id="scroll-to-top">
      <div className="header__container container">
        <div className="header__wrapper">
          <Logotype
            logoImage={logo}
            logoClass="header__logo"
            logoImageClass="header__logo-img"
          />
          <Navigation
            links={links}
            btnText={btnText}
            btnTextMobile={btnTextMobile}
          />
          {Boolean(btnText) && (
            <Button modifier="header" type="button">
              {btnText}
            </Button>
          )}
        </div>
      </div>
      <ScrollToTop />
    </header>
  )
}

export default Header
