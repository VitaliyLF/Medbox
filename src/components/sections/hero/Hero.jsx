import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import ContentBlock from '../../common/сontentBlock/ContentBlock'

const Hero = ({ heroContent }) => {
  const { title, subtitle, text, btnText, image, alt } = heroContent ?? {}
  const dimensions = image?.asset ? decodeAssetId(image.asset._ref).dimensions : null

  return (
    <section className="hero">
      <h1 className="visually-hidden">
        MedBox: Revolutionizing Senior Pharmacy Services for Stress-Free Medication Management
      </h1>
      <div className="hero__container container">
        <div className="hero__wrapper">
          <ContentBlock
            contentClassName="hero__content"
            title={title}
            subtitle={subtitle}
            subtitleModifier="extra-large"
            btnText={btnText}
            btnModifier="hero-section"
            text={text}
            textModifier="details"
          />
          {image && (
            <Image
              className="hero__img"
              src={urlFor(image).url()}
              alt={alt || ''}
              width={dimensions.width || 0}
              height={dimensions.height || 0}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
