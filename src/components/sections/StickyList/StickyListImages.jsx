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

  useGSAP(
    () => {
      // console.log(imageRefs)

      gsap.fromTo(
        imageRefs.current,
        {
          duration: 0.25,
        },
        {
          scrollTrigger: {
            trigger: imageRefs.current,
            start: '250px center',
            end: 'bottom 250px',
            // markers: true,
          },
        },
      )
    },
    { scope: imageRefs },
  )

  return (
    <ul className="sticky-list__images">
      {listImages?.length > 0 &&
        listImages.map((item, index) => {
          const imageDimensions = item.image?.asset
            ? decodeAssetId(item.image.asset._ref).dimensions
            : null

          return (
            <li
              className="sticky-list__images-item"
              key={item.image.asset._ref}>
              <Image
                className="sticky-list__image"
                src={urlFor(item.image).url()}
                alt={alt || ''}
                width={imageDimensions?.width || 0}
                height={imageDimensions?.height || 0}
                ref={(ref) => (imageRefs.current[index] = ref)}
              />
            </li>
          )
        })}
    </ul>
  )
}
export default StickyListImages
