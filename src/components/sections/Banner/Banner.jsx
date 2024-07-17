import { urlFor } from '@/app/lib/clientSanity'
import ContentModule from '@/components/common/ContentModule/ContentModule'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Review from '../../common/Review/Review'

const Banner = ({ bannerContent }) => {
  const { subtitle, text, url, linkText, btnText, image, alt } =
    bannerContent ?? {}

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__info">
          <ContentModule
            contentClassName="banner__content"
            linkModifier="phone"
            subtitle={subtitle}
            text={text}
            btnText={btnText}
            linkText={linkText}
            url={url}
          />
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
