import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'

const Hero = ({ heroContent }) => {
  return (
    <section className="hero hero--homepage">
      <div className="hero__container container">
        <div className="hero__wrapper">
          <div className="hero__info">
            <h1 className="hero__title title-section">{heroContent.heroTitle}</h1>
            <h2 className="hero__subtitle subtitle-section subtitle-section--homepage">{heroContent.heroSubtitle}</h2>
            <p className="hero__text text-section">{heroContent.heroText}</p>
            <button className="hero__btn btn btn--hero-section">{heroContent.heroBtnText}</button>
          </div>
          <Image
            className="hero__img"
            src={urlFor(heroContent.heroImage).url()}
            alt="Pill packets, some of them open and pills are falling out of them"
            width={750}
            height={507}
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
