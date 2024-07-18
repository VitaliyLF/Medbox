import TiltImage from '@/components/common/TiltImage/TiltImage'
import { IHeroContent } from '@/interfaces'
import ContentModule from '../../common/ContentModule/ContentModule'

interface Props {
  heroContent: IHeroContent
}

const Hero = ({ heroContent }: Props) => {
  const { title, subtitle, text, btnText, image, alt } = heroContent ?? {}

  return (
    <section className="hero">
      <h1 className="visually-hidden">
        MedBox: Revolutionizing Senior Pharmacy Services for Stress-Free
        Medication Management
      </h1>
      <div className="hero__container container">
        <div className="hero__wrapper">
          <ContentModule
            contentClassName="hero__content"
            subtitleModifier="extra-large"
            textModifier="details"
            title={title}
            subtitle={subtitle}
            text={text}
            btnText={btnText}
          />
          <TiltImage
            className="hero__img"
            image={image}
            alt={alt}
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
