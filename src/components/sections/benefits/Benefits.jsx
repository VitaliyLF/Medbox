import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const Benefits = ({ benefitsContent }) => {
  if (!benefitsContent) {
    return null
  }

  const { title, subtitle, text, btnText, image, alt } = benefitsContent
  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <section className="benefits">
      <div className="benefits__container container">
        <div className="benefits__info">
          {title && <h2 className="title-section">{title}</h2>}
          {subtitle && <h3 className="subtitle-section">{subtitle}</h3>}
          {text && (
            <div className="text-section">
              <PortableText value={text} />
            </div>
          )}
          {btnText && (
            <button className="btn" type="button">
              {btnText}
            </button>
          )}
        </div>
        {image && (
          <Image
            className="benefits__image"
            src={urlFor(image).url()}
            alt={alt || ''}
            width={dimensions.width}
            height={dimensions.height}
            loading="lazy"
          />
        )}
      </div>
    </section>
  )
}

export default Benefits
