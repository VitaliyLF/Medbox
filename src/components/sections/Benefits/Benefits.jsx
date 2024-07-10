import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import ContentModule from '../../common/ContentModule/ContentModule'

const Benefits = ({
  benefitsContent: { title, subtitle, text, btnText, image, alt } = {},
}) => {
  const { dimensions } = decodeAssetId(image.asset._ref)

  const contentBlockBenefits = {
    contentClassName: 'benefits__content',
    title,
    subtitle,
    btnText,
    text,
  }

  return (
    <section className="benefits">
      <div className="benefits__container container">
        <ContentModule {...contentBlockBenefits} />
        {image && (
          <Image
            className="benefits__image"
            src={urlFor(image).url()}
            alt={alt || ''}
            width={dimensions.width || 0}
            height={dimensions.height || 0}
          />
        )}
      </div>
    </section>
  )
}

export default Benefits
