import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/lib/clientSanity'

const ListLine = ({ listLineContent }) => {
  if (!listLineContent) {
    return null
  }

  const {
    subtitle,
    text,
    btnText,
    list,
    image,
    stars = 0,
    socailIcon,
    blockquote,
    url,
    socailIconAlt
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
          {subtitle && <h2 className="subtitle-section">{subtitle}</h2>}
          {text && (
            <div className="list-line__text text-section">
              <PortableText value={text} />
            </div>
          )}
          {btnText && (
            <Link className="btn" href="/">
              {btnText}
            </Link>
          )}
        </div>
        <ul className="list-line__items">
          {list?.map((item, index) => (
            <li className="list-line__item" key={index}>
              {item.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="list-line__wave">
        {image && (
          <>
            <Image
              className="list-line__image"
              src={urlFor(image).url()}
              alt=""
              width="1440"
              height="720"
              aria-hidden="true"
              loading="lazy"
            />
            <div className="list-line__wrapper container">
              <div className="review">
                <div className="review__top">
                  <ul className="review__stars" aria-label={`${stars} out of ${stars} stars`}>
                    {Array.from({ length: stars }).map((index) => (
                      <li className="review__star" key={index}>
                        <svg
                          className="review__star-icon"
                          aria-hidden="true"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.0001 1L15.0331 8.82547L23.4128 9.2918L16.9075 14.5945L19.0535 22.7082L12.0001 18.16L4.94666 22.7082L7.09263 14.5945L0.587406 9.2918L8.96711 8.82547L12.0001 1Z"
                            fill="#currentColor"
                          />
                        </svg>
                      </li>
                    ))}
                  </ul>
                  <Link className="review__social-link" href={url} target="_blank">
                    {socailIcon && (
                      <Image
                        className="review__social-image"
                        src={urlFor(socailIcon).url()}
                        alt={socailIconAlt || ''}
                        width="45"
                        height="45"
                        title={`${socailIconAlt} || New window`}
                        loading="lazy"
                      />
                    )}
                  </Link>
                </div>
                {blockquote && (
                  <blockquote className="review__blockquote text-section-medium ">
                    {blockquote.text}
                    <footer className="review__footer">
                      <cite className="review__author">{blockquote.author}</cite>
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
