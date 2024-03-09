const Header = ({ headerContent }) => {
  return (
    <header className="header header--homepage">
      <div className="header__container container">
        <div className="header__wrapper">
          <a className="header__logo" href="#">
            {/* <img  className="header__logo-img" src="img/main-logo.svg" alt="Home" width="144" height="41"> */}
          </a>
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link link ">
                  What is Medbox
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link link ">
                  How it works
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link link ">
                  Providers
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link link ">
                  Reviews
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link link ">
                  FAQs
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link link ">
                  Resources
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link link ">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="header__mobile">
              <button className="header__mobile-btn btn" type="button" aria-hidden="true">
                Check My Coverage
              </button>
              <a className="header__mobile-link btn btn--phone" href="tel: 8663537856" aria-hidden="true">
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
