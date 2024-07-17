import Logotype from '@/components/common/Logotype/Logotype'
import TextSection from '@/components/common/TextSection/TextSection'
import FooterContactList from './FooterContactList'
import FooterPartnersList from './FooterParthersList'
import FooterPolicyList from './FooterPolicyList'
import FooterSocialList from './FooterSocialList'

const Footer = ({ footerContent }) => {
  const { logo, contactList, socialList, policyList, copyright, partnersList } =
    footerContent ?? {}

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <Logotype
            logoImage={logo}
            logoClass="footer__logo"
            logoImageClass="footer__logo-image"
          />
          <FooterContactList contactList={contactList} />
        </div>
        <div className="footer__middle">
          <FooterSocialList socialList={socialList} />
          <FooterPolicyList policyList={policyList} />
        </div>
        <div className="footer__bottom">
          {copyright && (
            <TextSection modifier="footer-copyright">{copyright}</TextSection>
          )}
          <FooterPartnersList partnersList={partnersList} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
