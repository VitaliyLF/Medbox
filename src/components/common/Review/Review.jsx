import StarIcon from '@/app/assets/img/star-icon.svg'
import { urlFor } from '@/app/lib/clientSanity'
import Image from 'next/image'
import Link from 'next/link'

const Review = ({ source, modifier }) => {
  const {
    stars = 0,
    socialIcon,
    socialIconAlt,
    socialUrl,
    blockquote,
  } = source ?? {}

  return (
    <div className={`review review--${modifier}`}>
      <div className="review__top">
        <ul className="review__stars">
          {Array.from({ length: stars }).map((_, index) => (
            <li className="review__star" key={index}>
              <StarIcon
                className="review__star-icon"
                aria-hidden="true"
                width="25"
                height="25"
              />
            </li>
          ))}
        </ul>
        <Link
          className="review__social-link"
          href={socialUrl || ''}
          target="_blank">
          {socialIcon && (
            <Image
              className="review__social-image"
              src={urlFor(socialIcon).url()}
              alt={socialIconAlt || ''}
              width="45"
              height="45"
              title={`${socialIconAlt} || New window`}
            />
          )}
        </Link>
      </div>
      {Boolean(blockquote) && (
        <blockquote className="review__blockquote">
          {blockquote.text}
          <footer className="review__footer">
            <cite className="review__author">{blockquote.author}</cite>
          </footer>
        </blockquote>
      )}
    </div>
  )
}

export default Review
