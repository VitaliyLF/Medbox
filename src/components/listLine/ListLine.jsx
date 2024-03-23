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
