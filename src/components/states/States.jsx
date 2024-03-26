import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const States = ({ statesContent }) => {
  if (!statesContent) {
    return null
  }

  const { statesTitle, statesSubtitle, statesText, statesTextContact, statesBtnText, statesImageAndAlt } = statesContent

  return (
    <section className="states">
      <div className="states__container container">
        <div className="states__wrapper">
          <div className="states__info">
            {statesTitle && <h2 className="title-section">{statesTitle}</h2>}
            {statesSubtitle && <h3 className="subtitle-section">{statesSubtitle}</h3>}
            {statesText && (
              <div className="text-section">
                <PortableText value={statesText} />
              </div>
            )}
          </div>
          <div className="states__contact">
            {statesTextContact && (
              <div className="text-section">
                <PortableText value={statesTextContact} />
              </div>
            )}
            {statesBtnText && (
              <button className="btn" type="button">
                {statesBtnText}
              </button>
            )}
          </div>
        </div>
        {statesImageAndAlt && (
          <Image
            className="states__image"
            width="728"
            height="566"
            alt={statesImageAndAlt.statesImageAlt || ''}
            loading="lazy"
            src={urlFor(statesImageAndAlt.statesImage).url()}
          />
        )}
      </div>
    </section>
  )
}

export default States
