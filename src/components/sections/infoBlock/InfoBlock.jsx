import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Review from '../review/Review'
import { decodeAssetId } from '@/utils/sanityDecodeImg'

const InfoBlock = ({ infoBlockContent }) => {
  if (!infoBlockContent) {
    return null
  }

  const { subtitle, text, url, linkText, btnText, image, alt } = infoBlockContent
  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <section className="info-block info-block--homepage">
      <div className="info-block__container">
        <div className="info-block__content">
          <div className="info-block__info">
            {subtitle && <h2 className="subtitle-section">{subtitle}</h2>}
            {text && (
              <div className="text-section">
                <PortableText value={text} />
              </div>
            )}
            <Link className="info-block__link link link--phone" href={url}>
              {linkText}
            </Link>
            {btnText && (
              <button className="btn" type="button">
                {btnText}
              </button>
            )}
          </div>
          {image && (
            <Image
              className="info-block__image"
              src={urlFor(image).url()}
              alt={alt || ''}
              width={dimensions.width}
              height={dimensions.height}
              loading="lazy"
            />
          )}
        </div>
        <Review source={infoBlockContent} modifier="info-block" />
      </div>
    </section>
  )
}

export default InfoBlock
