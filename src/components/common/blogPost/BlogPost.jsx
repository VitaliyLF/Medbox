import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import SubtitleSection from '../subtitleSection/SubtitleSection'

const BlogPost = ({ source }) => {
  const { url, image, alt, tag, subtitle } = source ?? {}
  const dimensions = image?.asset ? decodeAssetId(image.asset._ref).dimensions : null

  return (
    <Link className="blog-post" href={url}>
      <div className="blog-post__wrapper">
        {image && (
          <Image
            className="blog-post__image"
            src={urlFor(image).url()}
            alt={alt || ''}
            width={dimensions.width || 0}
            height={dimensions.height || 0}
            loading="lazy"
            title={subtitle}
          />
        )}
      </div>
      <div className="blog-post__meta text-section text-section--medium">
        {tag && <div className="blog-post__tag">{tag}</div>}
        <time className="blog-post__time" dateTime="">
          Sep 23, 2023
        </time>
      </div>
      <SubtitleSection subtitleSection={subtitle} modifier="blog" />
    </Link>
  )
}

export default BlogPost
