import { urlFor } from '@/app/lib/clientSanity'
import Button from '@/components/common/Button/Button'
import TextSection from '@/components/common/TextSection/TextSection'
import ContentBlock from '@/components/common/ContentBlock/ContentBlock'
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
          <ContentBlock {...contentBlockStates} />
          <div className="states__contact">
            <TextSection textSection={textContact} />
            <Button buttonText={btnText} />
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
