import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const States = ({ statesContent }) => {
  if (!statesContent) {
    return null
  }

  const { title, subtitle, text, textContact, btnText, image, alt } = statesContent

  return (
    <section className="states">
      <div className="states__container container">
        <div className="states__wrapper">
          <div className="states__info">
            {title && <h2 className="title-section">{title}</h2>}
            {subtitle && <h3 className="subtitle-section">{subtitle}</h3>}
            {text && (
              <div className="text-section">
                <PortableText value={text} />
              </div>
            )}
          </div>
          <div className="states__contact">
            {textContact && (
              <div className="text-section">
                <PortableText value={textContact} />
              </div>
            )}
            {btnText && (
              <button className="btn" type="button">
                {btnText}
              </button>
            )}
          </div>
        </div>
        {image && (
          <Image
            className="states__image"
            src={urlFor(image).url()}
            width="728"
            height="566"
            alt={alt || ''}
            loading="lazy"
          />
        )}
      </div>
    </section>
  )
}

export default States
