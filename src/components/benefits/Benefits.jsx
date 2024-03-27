import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const Benefits = ({ benefitsContent }) => {
  if (!benefitsContent) {
    return null
  }

  const { title, subtitle, text, btnText, image, alt } = benefitsContent

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
            width="577"
            height="376"
            loading="lazy"
          />
        )}
      </div>
    </section>
  )
}

export default Benefits
