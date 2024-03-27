import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'

const InfoBlock = ({ infoBlockContent }) => {
  if (!infoBlockContent) {
    return null
  }

  const {
    subtitle,
    text,
    url,
    linkText,
    btnText,
    image,
    alt,
    stars,
    socailUrl,
    socailIcon,
    socailIconAlt,
    blockquote
  } = infoBlockContent

  return (
    <section className="info-block info-block--homepage">
      <div className="info-block__container">
        <div className="info-block__content">
          <div className="info-block__info">
            {subtitle && <h2 className="subtitle-section">{subtitle}</h2>}
            {text && (
              <div className="text-section">
                <PortableText value={text} />
              </div>
            )}
            <Link className="info-block__link link link--phone" href={url}>
              {linkText}
            </Link>
            {btnText && (
              <button className="btn" type="button">
                {btnText}
              </button>
            )}
          </div>
          {image && (
            <Image
              className="info-block__image"
              src={urlFor(image).url()}
              alt={alt || ''}
              width="418"
              height="387"
              loading="lazy"
            />
          )}
        </div>
        <div className="info-block__review review">
          <div className="review__top review__top--info-block">
            <ul className="review__stars">
              {Array.from({ length: stars }).map((index) => (
                <li className="review__star" key={index}>
                  <svg
                    className="review__star-icon review__star-icon--info-block"
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
            <Link className="review__social-link" href={socailUrl} target="_blank">
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
            <blockquote className="review__blockquote review__blockquote--info-block">
              {blockquote.text}
              <footer className="review__footer review__footer--info-block">
                <cite className="review__author review__author--info-block">{blockquote.author}</cite>
              </footer>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  )
}

export default InfoBlock
