import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'
import TextSection from '../textSection/TextSection'

const Details = ({ source, isOpen }) => {
  const { summary, text, url, linkText, image, alt } = source ?? {}
  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <details className="details" open={isOpen}>
      {summary && (
        <summary className="details__summary" title="Open/Close information">
          {summary}
        </summary>
      )}
      <div className="details__content">
        <TextSection textSection={text} modifier="details" />
        {linkText && (
          <Link className="link link--details" href={url}>
            {linkText}
          </Link>
        )}
        {image && (
          <Image
            className="details__image"
            src={urlFor(image).url()}
            alt={alt || ''}
            width={dimensions.width}
            height={dimensions.height}
            loading="lazy"
          />
        )}
      </div>
    </details>
  )
}

export default Details
