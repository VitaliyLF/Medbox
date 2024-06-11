import { urlFor } from '@/app/lib/clientSanity'
import SubtitleSection from '@/components/common/subtitleSection/SubtitleSection'
import TextSection from '@/components/common/textSection/TextSection'
import TitleSection from '@/components/common/titleSection/TitleSection'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'

const StickyList = ({ stickyListContent }) => {
  const { title, subtitle, image, alt, list, linkText } = stickyListContent ?? {}
  const imageDimensions = image?.asset ? decodeAssetId(image.asset._ref).dimensions : null

  return (
    <section className="sticky-list">
      <div className="container">
        <div className="sticky-list__top">
          <TitleSection titleSection={title} />
          <SubtitleSection subtitleSection={subtitle} />
        </div>
        <div className="sticky-list__inner">
          <aside className="sticky-list__aside">
            {image && (
              <Image
                className="sticky-list__image"
                src={urlFor(image).url()}
                alt={alt || ''}
                width={imageDimensions.width || 0}
                height={imageDimensions.height || 0}
                loading="lazy"
              />
            )}
          </aside>
          <div className="sticky-list__info">
            <ul className="sticky-list__items">
              {list?.map((item) => (
                <li className="sticky-list__item" key={item._key}>
                  <h4 className="sticky-list__item-subtitle">{item.title}</h4>
                  <TextSection textSection={item.text} />
                </li>
              ))}
            </ul>
            {linkText && (
              <Link className="sticky-list__btn btn" href="/">
                {linkText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickyList
