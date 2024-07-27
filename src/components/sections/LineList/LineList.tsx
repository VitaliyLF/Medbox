import ListLineSvg from '@/app/assets/img/list-line-icon.svg'
import { urlFor } from '@/app/lib/clientSanity'
import ContentModule from '@/components/common/ContentModule/ContentModule'
import { ILineList } from '@/interfaces'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Review from '../../common/Review/Review'
import LineListItems from './LineListItems'

interface Props {
  lineListContent: ILineList
}

const LineList = ({ lineListContent }: Props) => {
  const { subtitle, text, linkText, list, image } = lineListContent ?? {}

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  return (
    <section className="line-list">
      <div className="line-list__container container">
        <ListLineSvg className="line-list__svg-line" />
        <ContentModule
          contentClassName="line-list__content"
          subtitle={subtitle}
          text={text}
          linkText={linkText}
          url="/"
        />
        <LineListItems list={list} />
      </div>
      <div className="line-list__wave">
        {image && (
          <>
            <Image
              className="line-list__image"
              src={urlFor(image).url()}
              alt=""
              width={imageDimensions?.width || 0}
              height={imageDimensions?.height || 0}
              aria-hidden="true"
              quality={100}
              sizes="100vw"
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
