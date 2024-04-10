import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Link from 'next/link'

const Footer = ({ footerContent }) => {
  if (!footerContent) {
    return null
  }

  const { footerLogo, list } = footerContent
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

          <ul className="footer__list">
            {list?.map((item) => (
              <li className="footer__item" key={item._key}>
                {item.title && <h2 className="footer__item-title">{item.title}</h2>}
                <ul className="footer__sublist">
                  <li className="footer__subitem"></li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
