import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import Review from '../../common/review/Review'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import ContentBlock from '@/components/common/сontentBlock/ContentBlock'

const InfoBlock = ({ infoBlockContent }) => {
  const { subtitle, text, url, linkText, btnText, image, alt } = infoBlockContent ?? {}
  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <section className="info-block info-block--homepage">
      <div className="info-block__container">
        <div className="info-block__info">
          <ContentBlock
            contentClassName="info-block__content"
            subtitle={subtitle}
            text={text}
            btnText={btnText}
            linkModifier="phone"
            linkText={linkText}
            url={url}
          />
          {image && (
            <Image
              className="info-block__image"
              src={urlFor(image).url()}
              alt={alt || ''}
              width={dimensions.width}
              height={dimensions.height}
              loading="lazy"
            />
          )}
        </div>
        <Review source={infoBlockContent} modifier="info-block" />
      </div>
    </section>
  )
}

export default InfoBlock
