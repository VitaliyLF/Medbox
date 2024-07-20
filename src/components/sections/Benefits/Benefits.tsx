import { urlFor } from '@/app/lib/clientSanity'
import { IContent } from '@/interfaces'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import ContentModule from '../../common/ContentModule/ContentModule'

interface Props {
  benefitsContent: IContent
}

const Benefits = ({ benefitsContent }: Props) => {
  const { title, subtitle, text, btnText, image, alt } = benefitsContent ?? {}

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  return (
    <section className="benefits">
      <div className="benefits__container container">
        <ContentModule
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
            width={imageDimensions?.width || 0}
            height={imageDimensions?.height || 0}
          />
        )}
      </div>
    </section>
  )
}

export default Benefits
