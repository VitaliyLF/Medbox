import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

const StickyList = ({ stickyListContent }) => {
  if (!stickyListContent) {
    return null
  }

  const { stickyListTitle, stickyListSubtitle, stickyListImageAndAlt, stickyListItems, stickyListTextButton } =
    stickyListContent

  return (
    <section className="sticky-list">
      <div className="container">
        <div className="sticky-list__top">
          {stickyListTitle && <h2 className="title-section">{stickyListTitle}</h2>}
          {stickyListSubtitle && <h3 className="subtitle-section">{stickyListSubtitle}</h3>}
        </div>
        <div className="sticky-list__inner">
          <aside className="sticky-list__aside">
            {stickyListImageAndAlt && (
              <Image
                className="sticky-list__image"
                src={urlFor(stickyListImageAndAlt.stickyListImage).url()}
                alt={stickyListImageAndAlt.stickyListImageAlt || ''}
                width="632"
                height="509"
                loading="lazy"
              />
            )}
          </aside>
          <div className="sticky-list__info">
            <ul className="sticky-list__items">
              {stickyListItems?.map((item, index) => (
                <li className="sticky-list__item" key={index}>
                  <h4 className="sticky-list__item-title subtitle-item-section">{item.stickyListItemTitle}</h4>
                  <div className="text-section">
                    <PortableText value={item.stickyListItemText} />
                  </div>
                </li>
              ))}
            </ul>
            {stickyListTextButton && (
              <button className="sticky-list__btn btn" type="button">
                {stickyListTextButton}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickyList
