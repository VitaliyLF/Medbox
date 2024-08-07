'use client'

import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import TextSection from '../../TextSection/TextSection'

const Details = ({
  source: { summary, text, url, linkText, image, alt } = {},
  isOpen = false,
}) => {
  const detailsRef = useRef(null)

  useEffect(() => {
    const summaryElement = detailsRef.current.querySelector('summary')

    const handleClick = () => {
      if (detailsRef.current && !detailsRef.current.open) {
        detailsRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }

    summaryElement?.addEventListener('click', handleClick)

    return () => {
      summaryElement?.removeEventListener('click', handleClick)
    }
  }, [])

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  return (
    <details ref={detailsRef} className="details" open={isOpen}>
      {Boolean(summary) && (
        <summary
          className="details__summary"
          title={isOpen ? 'Close information' : 'Open information'}>
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
