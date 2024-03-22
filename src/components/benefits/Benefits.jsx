import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const Benefits = ({ benefitsContent }) => {
  if (!benefitsContent) {
    return null
  }

  const { benefitsTitle, benefitsSubtitle, benefitsText, benefitsBtnText, benefitsImage } = benefitsContent

  return (
    <section className="benefits">
      <div className="benefits__container container">
        <div className="benefits__info">
          {benefitsTitle && <h2 className="title-section">{benefitsTitle}</h2>}
          {benefitsSubtitle && <h3 className="subtitle-section">{benefitsSubtitle}</h3>}
          {benefitsText && (
            <div className="text-section">
              <PortableText value={benefitsText} />
            </div>
          )}
          {benefitsBtnText && (
            <button className="btn" type="button">
              {benefitsBtnText}
            </button>
          )}
        </div>
        {benefitsImage && (
          <Image
            className="benefits__img"
            src={urlFor(benefitsImage).url()}
            alt=""
            aria-hidden="true"
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
