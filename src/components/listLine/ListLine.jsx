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
    listLineBlockquote
  } = listLineContent

  return (
    <section className="list-line">
      <div className="list-line__container container">
        <div className="list-line__info">
          {listLineSubtitle && <h2 className="list-line__subtitle subtitle-section">{listLineSubtitle}</h2>}
          {listLineText && (
            <div className="list-line__text text-section">
              <PortableText value={listLineText}></PortableText>
            </div>
          )}
          {listLineLink && (
            <Link className="list-line__link btn" href="/">
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
          <Image
            className="list-line__image"
            src={urlFor(listLineImage).url()}
            alt=""
            width="1440"
            height="720"
            aria-hidden="true"
          />
        )}
        <div className="list-line__wrapper container">
          <div className="list-line__review">
            <div className="list-line__top">
              <ul className="list-line__star">
                {listLineStar?.map((star, index) => (
                  <li className="list-line__star-item" key={index}>
                    <Image
                      className="list-line__star-image"
                      src={urlFor(star.listLineStarItem).url()}
                      alt="5 out of 5 stars"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
              <Link className="list-line__social-link" href="/" target="_blank">
                {listLineSocialIcon && (
                  <Image
                    className="list-line__social-image"
                    src={urlFor(listLineSocialIcon).url()}
                    alt="Facebook socail link"
                    width="24"
                    height="24"
                    aria-label="Facebook socail link || New window"
                    title="Facebook socail link || New window"
                  />
                )}
              </Link>
            </div>
            {listLineBlockquote.listLineBlockquoteText && (
              <blockquote className="list-line__blockquote">
                {listLineBlockquote.listLineBlockquoteText}
                <footer className="list-line__footer">
                  <cite className="list-line__author"> {listLineBlockquote.listLineBlockquoteAuthor}</cite>
                </footer>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListLine
