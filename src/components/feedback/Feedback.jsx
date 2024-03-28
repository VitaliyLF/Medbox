import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import Link from 'next/link'

const Feedback = ({ feedBackContent }) => {
  if (!feedBackContent) {
    return null
  }

  const { subtitle, text, list, subtext, btnText, url } = feedBackContent

  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback-info">
          {subtitle && <h2 className="subtitle-section">{subtitle}</h2>}
          {text && (
            <div className="text-section">
              <PortableText value={text} />
            </div>
          )}
        </div>
        {/* <ul className="feedback__list">
          {list?.map((item, index) => (
            <li className="feedback__item" key={index}>
              <div className="feedback__review review">
                <div className="review__top">
                  <ul className="review__stars">
                    {Array.from({ length: item.stars }).map((star, starIndex) => (
                      <li className="review__star" key={starIndex}>
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
                  <Link className="review__social-link" href={item.url} target="_blank">
                    {item.socialIcon && (
                      <Image
                        className="review__social-image"
                        src={urlFor(item.socialIcon).url()}
                        alt={item.alt || ''}
                        width="45"
                        height="45"
                        title={`${item.alt} || New window`}
                        loading="lazy"
                      />
                    )}
                  </Link>
                </div>
                {item.blockquote && (
                  <blockquote className="review__blockquote review__blockquote--feedback">
                    {item.blockquote.text}
                    <footer className="review__footer">
                      <cite className="review__author">{item.blockquote.author}</cite>
                    </footer>
                  </blockquote>
                )}
              </div>
            </li>
          ))}
        </ul> */}
        <div className="feedback-info">
          {subtext && (
            <div className="feedback__subtext text-section">
              <PortableText value={subtext} />
            </div>
          )}
          {btnText && (
            <Link className="btn" href={url} target="_blank">
              {btnText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Feedback
