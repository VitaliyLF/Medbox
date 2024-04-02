import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Review from '../review/Review'

const LineList = ({ lineListContent }) => {
  if (!lineListContent) {
    return null
  }

  const { subtitle, text, btnText, list, image } = lineListContent
  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <section className="line-list">
      <div className="line-list__container container">
        <svg className="line-list__svg-line" viewBox="0 0 1486 1230" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6.2138C60.6667 16.3805 200 34.7138 280 26.7138C380 16.7138 857 -77.2861 857 170.714C857 318.714 857 620.381 857 783.714V1042.71C857.333 1104.71 915 1228.71 1143 1228.71C1428 1228.71 1462 1194.71 1486 1194.71"
            stroke="#045F51"
            strokeWidth="2"
          />
        </svg>
        <div className="line-list__info">
          {subtitle && <h2 className="subtitle-section">{subtitle}</h2>}
          {text && (
            <div className="line-list__text text-section">
              <PortableText value={text} />
            </div>
          )}
          {btnText && (
            <Link className="btn" href="/">
              {btnText}
            </Link>
          )}
        </div>
        <ul className="line-list__items">
          {list?.map((item) => (
            <li className="line-list__item" key={item._key}>
              {item.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="line-list__wave">
        {image && (
          <>
            <Image
              className="line-list__image"
              src={urlFor(image).url()}
              alt=""
              width={dimensions.width}
              height={dimensions.height}
              aria-hidden="true"
              loading="lazy"
            />
            <div className="line-list__wrapper container">
              <Review source={lineListContent} modifier="line-list" />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default LineList
