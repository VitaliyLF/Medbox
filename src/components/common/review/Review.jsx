import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/lib/clientSanity'

const Review = ({ source, modifier }) => {
  const { stars = 0, socialIcon, socialIconAlt, socialUrl, blockquote } = source ?? {}

  const StarIcon = () => (
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
  )

  return (
    <div className={`review review--${modifier}`}>
      <div className="review__top">
        <ul className="review__stars">
          {Array.from({ length: stars }).map((_, index) => (
            <li className="review__star" key={index}>
              <StarIcon />
            </li>
          ))}
        </ul>
        <Link className="review__social-link" href={socialUrl} target="_blank">
          {socialIcon && (
            <Image
              className="review__social-image"
              src={urlFor(socialIcon).url()}
              alt={socialIconAlt || ''}
              width="45"
              height="45"
              title={`${socialIconAlt} || New window`}
              loading="lazy"
            />
          )}
        </Link>
      </div>
      {blockquote && (
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
