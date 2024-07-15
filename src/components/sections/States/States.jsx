import { urlFor } from '@/app/lib/clientSanity'
import Button from '@/components/common/UI/Button/Button'
import TextSection from '@/components/common/TextSection/TextSection'
import ContentModule from '@/components/common/ContentModule/ContentModule'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'

const States = ({
  statesContent: {
    title,
    subtitle,
    text,
    textContact,
    btnText,
    image,
    alt,
  } = {},
}) => {
  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  const contentBlockStates = {
    contentClassName: 'states__content',
    title,
    subtitle,
    text,
  }

  return (
    <section className="states">
      <div className="states__container container">
        <div className="states__wrapper">
          <ContentModule {...contentBlockStates} />
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
