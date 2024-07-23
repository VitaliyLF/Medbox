import { urlFor } from '@/app/lib/clientSanity'
import { ISupportingItem } from '@/interfaces'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  list: ISupportingItem[]
}

const SupportingList = ({ list }: Props) => {
  return (
    <ul className="supporting__list">
      {list?.length > 0 &&
        list.map((item) => {
          const imageDimensions = item.image?.asset
            ? decodeAssetId(item.image.asset._ref).dimensions
            : null

          if (!item.image || !imageDimensions) {
            return null
          }

          return (
            <li className="supporting__item" key={item._key}>
              {item.url ? (
                <Link
                  className="supporting__link"
                  href={item.url || ''}
                  target="_blank">
                  <Image
                    className="supporting__image"
                    src={urlFor(item.image).url()}
                    width={imageDimensions.width || 0}
                    height={imageDimensions.height || 0}
                    alt={item.alt || ''}
                    title={`${item.alt} site || New window`}
                  />
                </Link>
              ) : (
                <Image
                  className="supporting__image"
                  src={urlFor(item.image).url()}
                  width={imageDimensions.width || 0}
                  height={imageDimensions.height || 0}
                  alt={item.alt || ''}
                />
              )}
            </li>
          )
        })}
    </ul>
  )
}
export default SupportingList
