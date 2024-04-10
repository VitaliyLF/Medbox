import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Link from 'next/link'
import TitleSection from '@/components/common/titleSection/TitleSection'
import TextSection from '@/components/common/textSection/TextSection'

const Footer = ({ footerContent }) => {
  const { footerLogo, list } = footerContent ?? {}
  const { dimensions } = decodeAssetId(footerLogo.asset._ref)

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__wrapper">
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
          {/* <ul className="footer__list">
            {list?.map((item) => (
              <li className="footer__item" key={item._key}>
                <TitleSection titleSection={item.title} modifier="footer" />
                <TextSection textSection={item.text} modifier="footer" />
                <ul className="footer__sublist">
                  <li className="footer__item">
                    {item?.sublist.map((link) => (
                      <Link className="link link--footer" href={link.url} key={link._key}>
                        {link.linkText}
                      </Link>
                    ))}
                  </li>
                </ul>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
