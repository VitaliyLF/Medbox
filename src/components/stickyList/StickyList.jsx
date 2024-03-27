import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const StickyList = ({ stickyListContent }) => {
  if (!stickyListContent) {
    return null
  }

  const { title, subtitle, image, alt, list, btnText } = stickyListContent

  return (
    <section className="sticky-list">
      <div className="container">
        <div className="sticky-list__top">
          {title && <h2 className="title-section">{title}</h2>}
          {subtitle && <h3 className="subtitle-section">{subtitle}</h3>}
        </div>
        <div className="sticky-list__inner">
          <aside className="sticky-list__aside">
            {image && (
              <Image
                className="sticky-list__image"
                src={urlFor(image).url()}
                alt={alt || ''}
                width="632"
                height="509"
                loading="lazy"
              />
            )}
          </aside>
          <div className="sticky-list__info">
            <ul className="sticky-list__items">
              {list?.map((item, index) => (
                <li className="sticky-list__item" key={index}>
                  <h4 className="sticky-list__item-title subtitle-item-section">{item.title}</h4>
                  <div className="text-section">
                    <PortableText value={item.text} />
                  </div>
                </li>
              ))}
            </ul>
            {btnText && (
              <button className="sticky-list__btn btn" type="button">
                {btnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickyList
