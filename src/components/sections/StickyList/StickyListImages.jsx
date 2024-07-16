import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'

const StickyListImages = ({ listImages, alt }) => {
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
