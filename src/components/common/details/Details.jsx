import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'
import TextSection from '../textSection/TextSection'

const Details = ({ source, isOpen = false }) => {
  const { summary, text, url, linkText, image, alt } = source ?? {}
  const imageDimensions = image?.asset ? decodeAssetId(image.asset._ref).dimensions : null

  return (
    <details className="details" open={isOpen}>
      {summary && (
        <summary className="details__summary" title="Open/Close information">
          {summary}
        </summary>
      )}
      <article className="details__content">
        <TextSection textSection={text} modifier="details" />
        {linkText && (
          <Link className="link link--puerto-rico" href={url}>
            {linkText}
          </Link>
        )}
        {image && (
          <Image
            className="details__image"
            src={urlFor(image).url()}
            alt={alt || ''}
            width={imageDimensions.width || 0}
            height={imageDimensions.height || 0}
            loading="lazy"
          />
        )}
      </article>
    </details>
  )
}

export default Details
