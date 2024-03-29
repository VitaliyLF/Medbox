import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'

const Details = ({ source }) => {
  if (!source) {
    return null
  }

  const { summary, text, url, linkText, image, alt } = source

  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <details className="details">
      <summary className="details__summary">{summary}</summary>
      <div className="text-section">
        <PortableText value={text} />
      </div>
      <Link className="link" href={url}>
        {linkText}
      </Link>
      <Image
        className="details__image"
        src={urlFor(image).url()}
        alt={alt || ''}
        width={dimensions.width}
        height={dimensions.height}
        loading="lazy"
      />
    </details>
  )
}

export default Details
