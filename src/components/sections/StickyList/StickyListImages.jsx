'use client'

import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

const StickyListImages = ({ listImages, alt }) => {
  gsap.registerPlugin(ScrollTrigger)
  const imageRefs = useRef([])

  console.log(imageRefs)

  useGSAP(() => {}, {})

  return (
    <ul className="sticky-list__images">
      {listImages?.length > 0 &&
        listImages.map((item) => {
          const imageDimensions = item.image?.asset
            ? decodeAssetId(item.image.asset._ref).dimensions
            : null

          return (
            <li
              className="sticky-list__images-item"
              key={item.image.asset._ref}>
              <Image
                ref={(image) => (imageRefs.current[item._key] = image)}
                className="sticky-list__image"
                src={urlFor(item.image).url()}
                alt={alt || ''}
                width={imageDimensions.width || 0}
                height={imageDimensions.height || 0}
              />
            </li>
          )
        })}
    </ul>
  )
}
export default StickyListImages
