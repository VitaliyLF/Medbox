import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Review from '../../common/review/Review'
import ContentBlock from '@/components/common/сontentBlock/ContentBlock'

const LineList = ({ lineListContent }) => {
  const { subtitle, text, linkText, list, image } = lineListContent ?? {}
  const imageDimensions = image?.asset ? decodeAssetId(image.asset._ref).dimensions : null

  const contentBlockLineList = {
    contentClassName: 'line-list__content',
    subtitle,
    text,
    linkText,
    url: '/'
  }

  const ListLineSvg = () => (
    <svg className="line-list__svg-line" viewBox="0 0 1486 1230" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 6.2138C60.6667 16.3805 200 34.7138 280 26.7138C380 16.7138 857 -77.2861 857 170.714C857 318.714 857 620.381 857 783.714V1042.71C857.333 1104.71 915 1228.71 1143 1228.71C1428 1228.71 1462 1194.71 1486 1194.71"
        stroke="#045F51"
        strokeWidth="2"
      />
    </svg>
  )

  return (
    <section className="line-list">
      <div className="line-list__container container">
        <ListLineSvg />
        <ContentBlock {...contentBlockLineList} />
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
              width={imageDimensions.width || 0}
              height={imageDimensions.height || 0}
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
