import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Link from 'next/link'
import TextSection from '@/components/common/TextSection/TextSection'
import FooterContactList from './FooterContactList'
import FooterSocialList from './FooterSocialList'
import FooterPolicyList from './FooterPolicyList'
import FooterPartnersList from './FooterParthersList'

const Footer = ({
  footerContent: {
    footerLogo,
    contactList,
    socialList,
    policyList,
    copyright,
    partnersList,
  } = {},
}) => {
  const LogoDimensions = footerLogo?.asset
    ? decodeAssetId(footerLogo.asset._ref).dimensions
    : null

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          {footerLogo && (
            <Link className="footer__logo" href="/">
              <Image
                className="footer__logo-image"
                src={urlFor(footerLogo).url()}
                alt="Medbox Logo"
                title="Homepage"
                width={LogoDimensions.width || 0}
                height={LogoDimensions.height || 0}
              />
            </Link>
          )}
          <FooterContactList contactList={contactList} />
        </div>
        <div className="footer__middle">
          <FooterSocialList socialList={socialList} />
          <FooterPolicyList policyList={policyList} />
        </div>
        <div className="footer__bottom">
          <TextSection textSection={copyright} modifier="footer-copyright" />
          <FooterPartnersList partnersList={partnersList} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
