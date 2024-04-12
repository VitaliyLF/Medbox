import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Link from 'next/link'
import TitleSection from '@/components/common/titleSection/TitleSection'
import TextSection from '@/components/common/textSection/TextSection'

const Footer = ({ footerContent }) => {
  const { footerLogo, list, socialList, policyList } = footerContent ?? {}
  const { dimensions } = decodeAssetId(footerLogo.asset._ref)

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
                width={dimensions.width}
                height={dimensions.height}
              />
            </Link>
          )}
          <ul className="footer__list">
            {list?.map((item) => (
              <li className="footer__item" key={item._key}>
                <TitleSection titleSection={item.title} modifier="footer" />
                <TextSection textSection={item.text} modifier="footer" />
                {item?.sublist && (
                  <ul className="footer__sublist">
                    <li className="footer__item">
                      {item?.sublist?.map((link) => (
                        <Link className="link link--light" href={link.url || ''} key={link._key}>
                          {link.linkText}
                        </Link>
                      ))}
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__middle">
          <ul className="footer__social-list">
            {socialList?.map((socialItem) => (
              <li className="footer__social-item" key={socialItem._key}>
                <Link className="footer__social-link" href={socialItem.url} target="_blank">
                  {socialItem.linkText}
                  <Image
                    className="footer__social-image"
                    src={urlFor(socialItem.socialIcon).url()}
                    alt={socialItem.socialIconAlt || ''}
                    width="25"
                    height="25"
                    title={`${socialItem.socialIconAlt} || New window`}
                    loading="lazy"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="footer__policy-list">
            {policyList?.map((link) => (
              <li className="footer__policy-item" key={link._key}>
                <Link className="footer__policy-link" href={link.url}>
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
