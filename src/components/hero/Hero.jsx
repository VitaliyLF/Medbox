import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const Hero = ({ heroContent }) => {
  if (!heroContent) {
    return null
  }

  const { heroTitle, heroSubtitle, heroText, heroBtnText, heroImageAndAlt } = heroContent

  return (
    <section className="hero hero--homepage">
      <div className="hero__container container">
        <div className="hero__wrapper">
          <div className="hero__info">
            {heroTitle && <h1 className="title-section">{heroTitle}</h1>}
            {heroSubtitle && <h2 className="subtitle-section subtitle-section--homepage">{heroSubtitle}</h2>}
            {heroText && (
              <div className="text-section">
                <PortableText value={heroText} />
              </div>
            )}
            {heroBtnText && (
              <button className="hero__btn btn btn--hero-section" type="button">
                {heroBtnText}
              </button>
            )}
          </div>
          {heroImageAndAlt?.heroImage && (
            <Image
              className="hero__img"
              src={urlFor(heroImageAndAlt.heroImage).url()}
              alt={heroImageAndAlt.herosAltImageText || ''}
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
