import { urlFor } from '@/app/lib/clientSanity'
import Button from '@/components/common/button/Button'
import TextSection from '@/components/common/textSection/TextSection'
import ContentBlock from '@/components/common/сontentBlock/ContentBlock'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'

const States = ({ statesContent }) => {
  const { title, subtitle, text, textContact, btnText, image, alt } = statesContent ?? {}
  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <section className="states">
      <div className="states__container container">
        <div className="states__wrapper">
          <ContentBlock contentClassName="states__content" title={title} subtitle={subtitle} text={text} />
          <div className="states__contact">
            <TextSection textSection={textContact} />
            <Button buttonText={btnText} />
          </div>
        </div>
        {image && (
          <Image
            className="states__image"
            src={urlFor(image).url()}
            width={dimensions.width}
            height={dimensions.height}
            alt={alt || ''}
            loading="lazy"
          />
        )}
      </div>
    </section>
  )
}

export default States
