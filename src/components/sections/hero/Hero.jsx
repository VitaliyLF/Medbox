import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import ContentBlock from '../../common/сontentBlock/ContentBlock'

const Hero = ({ heroContent }) => {
  const { title, subtitle, text, btnText, image, alt } = heroContent ?? {}
  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <section className="hero hero--homepage">
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
              width={dimensions.width}
              height={dimensions.height}
              priority={true}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
