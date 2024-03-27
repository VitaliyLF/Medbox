import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const Hero = ({ heroContent }) => {
  if (!heroContent) {
    return null
  }

  const { title, subtitle, text, btnText, image, alt } = heroContent

  return (
    <section className="hero hero--homepage">
      <div className="hero__container container">
        <div className="hero__wrapper">
          <div className="hero__info">
            {title && <h1 className="title-section">{title}</h1>}
            {subtitle && <h2 className="subtitle-section subtitle-section--homepage">{subtitle}</h2>}
            {text && (
              <div className="text-section">
                <PortableText value={text} />
              </div>
            )}
            {btnText && (
              <button className="hero__btn btn btn--hero-section" type="button">
                {btnText}
              </button>
            )}
          </div>
          {image && (
            <Image
              className="hero__img"
              src={urlFor(image).url()}
              alt={alt || ''}
              width="750"
              height="507"
              priority={true}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
