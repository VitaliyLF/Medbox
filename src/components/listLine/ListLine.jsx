import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/lib/clientSanity'

const ListLine = ({ listLineContent }) => {
  if (!listLineContent) {
    return null
  }

  const {
    listLineSubtitle,
    listLineText,
    listLineLink,
    listLineItems,
    listLineImage,
    listLineStar,
    listLineSocialIcon,
    listLineBlockquote,
    listLineSocialUrl,
    listLineSocialIconAlt
  } = listLineContent

  return (
    <section className="list-line">
      <div className="list-line__container container">
        <svg className="list-line__svg-line" viewBox="0 0 1486 1230" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6.2138C60.6667 16.3805 200 34.7138 280 26.7138C380 16.7138 857 -77.2861 857 170.714C857 318.714 857 620.381 857 783.714V1042.71C857.333 1104.71 915 1228.71 1143 1228.71C1428 1228.71 1462 1194.71 1486 1194.71"
            stroke="#045F51"
            strokeWidth="2"
          />
        </svg>
        <div className="list-line__info">
          {listLineSubtitle && <h2 className="subtitle-section">{listLineSubtitle}</h2>}
          {listLineText && (
            <div className="list-line__text text-section">
              <PortableText value={listLineText} />
            </div>
          )}
          {listLineLink && (
            <Link className="btn" href="/">
              {listLineLink}
            </Link>
          )}
        </div>
        <ul className="list-line__items">
          {listLineItems?.map((item, index) => (
            <li className="list-line__item" key={index}>
              {item.listLineItem}
            </li>
          ))}
        </ul>
      </div>
      <div className="list-line__wave">
        {listLineImage && (
          <>
            <Image
              className="list-line__image"
              src={urlFor(listLineImage).url()}
              alt=""
              width="1440"
              height="720"
              aria-hidden="true"
              loading="lazy"
            />
            <div className="list-line__wrapper container">
              <div className="review">
                <div className="review__top">
                  <ul className="review__stars">
                    {listLineStar?.map((star, index) => (
                      <li className="review__star" key={index}>
                        <Image
                          className="review__star-image"
                          src={urlFor(star.listLineStarItem).url()}
                          alt={index === 0 ? `${listLineStar.length} out of ${listLineStar.length} stars` : ''}
                          width="24"
                          height="24"
                          aria-hidden={index === 0 ? 'false' : 'true'}
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>
                  <Link className="review__social-link" href={listLineSocialUrl} target="_blank">
                    {listLineSocialIcon && (
                      <Image
                        className="review__social-image"
                        src={urlFor(listLineSocialIcon).url()}
                        alt={listLineSocialIconAlt || ''}
                        width="45"
                        height="45"
                        title={`${listLineSocialIconAlt} || New window`}
                        loading="lazy"
                      />
                    )}
                  </Link>
                </div>
                {listLineBlockquote.listLineBlockquoteText && (
                  <blockquote className="review__blockquote text-section-medium ">
                    {listLineBlockquote.listLineBlockquoteText}
                    <footer className="review__footer">
                      <cite className="review__author">{listLineBlockquote.listLineBlockquoteAuthor}</cite>
                    </footer>
                  </blockquote>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ListLine
