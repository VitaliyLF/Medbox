import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/lib/clientSanity'
import { PortableText } from 'next-sanity'

const InfoBlock = ({ infoBlockContent }) => {
  if (!infoBlockContent) {
    return null
  }

  const {
    infoBlockTitle,
    infoBlockText,
    infoBlockUrl,
    infoBlockValue,
    infoBlogBtnText,
    infoBlockImageAndAlt,
    infoBlockStar,
    infoBlockSocialUrl,
    infoBlockSocialIcon,
    infoBlockSocialIconAlt,
    infoBlockBlockquote
  } = infoBlockContent

  return (
    <section className="info-block info-block--homepage">
      <div className="info-block__container">
        <div className="info-block__content">
          {infoBlockTitle && <h2 className="info-block__title">{infoBlockTitle}</h2>}
          {infoBlockText && (
            <div className="text-section">
              <PortableText value={infoBlockText} />
            </div>
          )}
          <Link className="info-block__link link" href={infoBlockUrl}>
            {infoBlockValue}
          </Link>
          {infoBlogBtnText && (
            <button className="btn" type="button">
              {infoBlogBtnText}
            </button>
          )}
          {infoBlockImageAndAlt && (
            <Image
              className="info__block-image"
              src={urlFor(infoBlockImageAndAlt.infoBlockImage).url()}
              alt={infoBlockImageAndAlt.infoBlockImageAlt}
              width="418"
              height="387"
              loading="lazy"
            />
          )}
        </div>
        <div className="info-block__review review">
          <div className="review__top">
            <ul className="review__stars">
              {infoBlockStar?.map((star, index) => (
                <li className="review__star" key={index}>
                  <Image
                    className="review__star-image"
                    src={urlFor(star.infoBlockStarItem).url()}
                    alt={index === 0 ? `${infoBlockStar.length} out of ${infoBlockStar.length} stars` : ''}
                    width="24"
                    height="24"
                    aria-hidden={index === 0 ? 'false' : 'true'}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
            <Link className="review__social-link" href={infoBlockSocialUrl} target="_blank">
              {infoBlockSocialIcon && (
                <Image
                  className="review__social-image"
                  src={urlFor(infoBlockSocialIcon).url()}
                  alt={infoBlockSocialIconAlt || ''}
                  width="45"
                  height="45"
                  title={`${infoBlockSocialIconAlt} || New window`}
                  loading="lazy"
                />
              )}
            </Link>
          </div>
          {infoBlockBlockquote.infoBlockBlockquoteText && (
            <blockquote className="review__blockquote text-section-medium">
              {infoBlockBlockquote.infoBlockBlockquoteText}
              <footer className="review__footer">
                <cite className="review__author">{infoBlockBlockquote.infoBlockBlockquoteAuthor}</cite>
              </footer>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  )
}

export default InfoBlock
