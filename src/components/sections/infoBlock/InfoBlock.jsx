import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import Review from '../../common/review/Review'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import ContentBlock from '@/components/common/сontentBlock/ContentBlock'

const InfoBlock = ({ infoBlockContent }) => {
  const { subtitle, text, url, linkText, btnText, image, alt } =
    infoBlockContent ?? {}

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  const contentBlockInfo = {
    contentClassName: 'info-block__content',
    linkModifier: 'phone',
    subtitle,
    text,
    btnText,
    linkText,
    url,
  }

  return (
    <section className="info-block">
      <div className="info-block__container">
        <div className="info-block__info">
          <ContentBlock {...contentBlockInfo} />
          {image && (
            <Image
              className="info-block__image"
              src={urlFor(image).url()}
              alt={alt || ''}
              width={imageDimensions.width || 0}
              height={imageDimensions.height || 0}
            />
          )}
        </div>
        <Review source={infoBlockContent} modifier="info-block" />
      </div>
    </section>
  )
}

export default InfoBlock
