import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import Review from '../../common/Review/Review'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import ContentModule from '@/components/common/ContentModule/ContentModule'

const Banner = ({ bannerContent }) => {
  const { subtitle, text, url, linkText, btnText, image, alt } =
    bannerContent ?? {}

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  const contentBlockBanner = {
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
          <ContentModule {...contentBlockBanner} />
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
        <Review source={bannerContent} modifier="info-block" />
      </div>
    </section>
  )
}

export default Banner
