'use client'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import { useEffect, useState } from 'react'

const TiltImage = ({ image, alt, className, priority = false }) => {
  const [isMobile, setIsMobile] = useState(false)

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handleResize = () => setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleResize)

    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  return (
    <>
      {image &&
        (isMobile ? (
          <Image
            className={className}
            src={urlFor(image).url()}
            alt={alt || ''}
            width={imageDimensions.width || 0}
            height={imageDimensions.height || 0}
            priority={priority}
          />
        ) : (
          <Tilt
            scale={1.1}
            transitionSpeed={1500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}>
            <Image
              className={className}
              src={urlFor(image).url()}
              alt={alt || ''}
              width={imageDimensions.width || 0}
              height={imageDimensions.height || 0}
              priority={priority}
            />
          </Tilt>
        ))}
    </>
  )
}
export default TiltImage
