import { urlFor } from '@/app/lib/sanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const Hero = ({ heroContent }) => {
  return (
    <section className="hero hero--homepage">
      <div className="hero__container container">
        <div className="hero__wrapper">
          <div className="hero__info">
            {heroContent.hero.heroTitle && <h1 className="hero__title title-section">{heroContent.hero.heroTitle}</h1>}
            {heroContent.hero.heroSubtitle && (
              <h2 className="hero__subtitle subtitle-section subtitle-section--homepage">
                {heroContent.hero.heroSubtitle}
              </h2>
            )}
            {heroContent.hero.heroText && (
              <div className="hero__text text-section">
                <PortableText value={heroContent.hero.heroText}></PortableText>
              </div>
            )}
            {heroContent.hero.heroBtnText && (
              <button className="hero__btn btn btn--hero-section" type="button">
                {heroContent.hero.heroBtnText}
              </button>
            )}
          </div>
          {heroContent.hero.heroWrapperImage.heroImage && (
            <Image
              className="hero__img"
              src={urlFor(heroContent.hero.heroWrapperImage.heroImage).url()}
              alt={heroContent.hero.heroWrapperImage.herosAltImageText || ''}
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
