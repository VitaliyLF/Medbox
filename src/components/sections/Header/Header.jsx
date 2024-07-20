import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop'
import HeaderWrapper from './HeaderWrapper'

const Header = ({ headerContent }) => {
  const { logo, links, btnText, btnTextMobile } = headerContent ?? {}

  return (
    <header className="header" id="scroll-to-top">
      <div className="header__container container">
        <HeaderWrapper
          logo={logo}
          links={links}
          btnText={btnText}
          btnTextMobile={btnTextMobile}
        />
      </div>
      <ScrollToTop />
    </header>
  )
}

export default Header
