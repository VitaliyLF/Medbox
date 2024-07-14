import { decodeAssetId } from '@/utils/sanityDecodeImg'
import { urlFor } from '@/app/lib/clientSanity'
import Image from 'next/image'
import Review from '../../common/Review/Review'
import ContentModule from '@/components/common/ContentModule/ContentModule'

const Banner = ({ bannerContent }) => {
  const { subtitle, text, url, linkText, btnText, image, alt } =
    bannerContent ?? {}

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  const contentBlockBanner = {
    contentClassName: 'banner__content',
    linkModifier: 'phone',
    subtitle,
    text,
    btnText,
    linkText,
    url,
  }

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__info">
          <ContentModule {...contentBlockBanner} />
          {image && (
            <Image
              className="banner__image"
              src={urlFor(image).url()}
              alt={alt || ''}
              width={imageDimensions.width || 0}
              height={imageDimensions.height || 0}
            />
          )}
        </div>
        <Review source={bannerContent} modifier="banner" />
      </div>
    </section>
  )
}

export default Banner
