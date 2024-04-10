import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import ContentBlock from '../../common/сontentBlock/ContentBlock'

const Benefits = ({ benefitsContent }) => {
  const { title, subtitle, text, btnText, image, alt } = benefitsContent ?? {}
  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <section className="benefits">
      <div className="benefits__container container">
        <ContentBlock
          contentClassName="benefits__content"
          title={title}
          subtitle={subtitle}
          btnText={btnText}
          text={text}
        />
        {image && (
          <Image
            className="benefits__image"
            src={urlFor(image).url()}
            alt={alt || ''}
            width={dimensions.width}
            height={dimensions.height}
            loading="lazy"
          />
        )}
      </div>
    </section>
  )
}

export default Benefits
