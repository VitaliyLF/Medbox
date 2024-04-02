import { urlFor } from '@/app/lib/clientSanity'
import Image from 'next/image'
import Link from 'next/link'
import { decodeAssetId } from '@/utils/sanityDecodeImg'

const Supporting = ({ supportingContent }) => {
  if (!supportingContent) {
    return null
  }

  const { title, subtitle, list } = supportingContent

  return (
    <section className="supporting">
      <div className="container">
        <div className="centered">
          {title && <h2 className="title-section">{title}</h2>}
          {subtitle && <h3 className="subtitle-section">{subtitle}</h3>}
        </div>
        <ul className="supporting__list">
          {list?.map((item) => {
            const { dimensions } = decodeAssetId(item.image.asset._ref)

            return (
              <li className="supporting__item" key={item._key}>
                {item.url ? (
                  <Link className="supporting__link" href={item.url || ''} target="_blank">
                    <Image
                      className="supporting__image"
                      src={urlFor(item.image).url()}
                      width={dimensions.width}
                      height={dimensions.height}
                      alt={item.alt || ''}
                      loading="lazy"
                      title={`${item.alt} site || New window`}
                    />
                  </Link>
                ) : (
                  <Image
                    className="supporting__image"
                    src={urlFor(item.image).url()}
                    width={dimensions.width}
                    height={dimensions.height}
                    alt={item.alt || ''}
                    loading="lazy"
                  />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Supporting
