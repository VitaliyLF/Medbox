import { urlFor } from '@/app/lib/clientSanity'
import { IStickyList } from '@/interfaces'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import classNames from 'classnames'
import Image from 'next/image'

interface Props {
  listImages: IStickyList[]
  alt: string
  activeIndex: number
}

const StickyListImages = ({ listImages, alt, activeIndex }: Props) => {
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
                className={classNames('sticky-list__image', {
                  'is-active': activeIndex === index,
                })}
                src={urlFor(item.image).url()}
                alt={alt || ''}
                width={imageDimensions?.width || 0}
                height={imageDimensions?.height || 0}
              />
            </li>
          )
        })}
    </ul>
  )
}
export default StickyListImages
