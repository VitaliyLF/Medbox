'use client'

import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import TextSection from '../../TextSection/TextSection'

const Details = ({
  source: { summary, text, url, linkText, image, alt } = {},
  isOpen = false,
}) => {
    const handleClick = useCallback((event) => {
    const detailsElement = event.currentTarget.closest('details')
    if (detailsElement && !detailsElement.open) {
      detailsElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  return (
    <details className="details" open={isOpen}>
      {Boolean(summary) && (
        <summary
          className="details__summary"
          title={isOpen ? 'Close information' : 'Open information'}
          onClick={handleClick}>
          {summary}
        </summary>
      )}
      <div className="details__content">
        {text && <TextSection modifier="details">{text}</TextSection>}
        {Boolean(linkText) && (
          <Link className="link link--puerto-rico" href={url || ''}>
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
          />
        )}
      </div>
    </details>
  )
}

export default Details
