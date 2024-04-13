import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Link from 'next/link'
import TitleSection from '@/components/common/titleSection/TitleSection'
import TextSection from '@/components/common/textSection/TextSection'

const Footer = ({ footerContent }) => {
  const { footerLogo, list, socialList, policyList, copyright, parthersList } = footerContent ?? {}
  const dimensions = footerLogo?.asset ? decodeAssetId(footerLogo.asset._ref).dimensions : null

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
                width={dimensions.width || 0}
                height={dimensions.height || 0}
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
            {socialList?.map((socialItem) => {
              const socialDimensions = socialItem.socialIcon?.asset
                ? decodeAssetId(socialItem.socialIcon.asset._ref).dimensions
                : null

              return (
                <li className="footer__social-item" key={socialItem._key}>
                  <Link
                    className="footer__social-link"
                    href={socialItem.url}
                    target="_blank"
                    title={`${socialItem.socialIconAlt} || New window`}>
                    {socialItem.linkText}
                    {socialItem.socialIcon && (
                      <Image
                        className="footer__social-image"
                        src={urlFor(socialItem.socialIcon).url()}
                        alt={socialItem.socialIconAlt || ''}
                        width={socialDimensions?.width || 0}
                        height={socialDimensions?.height || 0}
                        loading="lazy"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
          <ul className="footer__policy-list">
            {policyList?.map((link) => (
              <li className="footer__policy-item" key={link._key}>
                <Link className="link link--mint" href={link.url}>
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__bottom">
          <TextSection textSection={copyright} modifier="footer-copyright" />
          <ul className="footer__bottom-list">
            {parthersList?.map((parther) => {
              const partherDimensions = parther.image?.asset ? decodeAssetId(parther.image.asset._ref).dimensions : null

              return (
                <li className="footer__bottom-item" key={parther._key}>
                  <Link className="footer__bottom-link" href={parther.url} target="_blank">
                    <Image
                      className="footer__bottom-image"
                      src={urlFor(parther.image).url()}
                      alt={parther.alt || ''}
                      width={partherDimensions?.width || 0}
                      height={partherDimensions?.height || 0}
                      title={`${parther.alt} || New window`}
                      loading="lazy"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
