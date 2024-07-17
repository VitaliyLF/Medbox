import { urlFor } from '@/app/lib/clientSanity'
import ContentModule from '@/components/common/ContentModule/ContentModule'
import TextSection from '@/components/common/TextSection/TextSection'
import Button from '@/components/common/UI/Button/Button'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'

const States = ({ statesContent }) => {
  const { title, subtitle, text, textContact, btnText, image, alt } =
    statesContent ?? {}

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  return (
    <section className="states">
      <div className="states__container container">
        <div className="states__wrapper">
          <ContentModule
            contentClassName="states__content"
            title={title}
            subtitle={subtitle}
            text={text}
          />
          <div className="states__contact">
            {textContact && <TextSection>{textContact}</TextSection>}
            {btnText && <Button type="button">{btnText}</Button>}
          </div>
        </div>
        {image && (
          <Image
            className="states__image"
            src={urlFor(image).url()}
            width={imageDimensions.width || 0}
            height={imageDimensions.height || 0}
            alt={alt || ''}
          />
        )}
      </div>
    </section>
  )
}

export default States
