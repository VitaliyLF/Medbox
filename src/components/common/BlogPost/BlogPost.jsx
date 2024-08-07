import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'
import SubtitleSection from '../SubtitleSection/SubtitleSection'

const BlogPost = ({ post }) => {
  const { url, image, alt, tag, subtitle } = post ?? {}

  const imageDimensions = image?.asset
    ? decodeAssetId(image.asset._ref).dimensions
    : null

  return (
    <Link className="blog-post" href={url || ''}>
      <div className="blog-post__wrapper">
        {image && (
          <Image
            className="blog-post__image"
            src={urlFor(image).url()}
            alt={alt || ''}
            width={imageDimensions.width || 0}
            height={imageDimensions.height || 0}
            title={subtitle || ''}
          />
        )}
      </div>
      <div className="blog-post__meta">
        {Boolean(tag) && <div className="blog-post__tag">{tag}</div>}
        <time className="blog-post__time" dateTime="2024-09-23">
          Sep 23, 2024
        </time>
      </div>
      {subtitle && (
        <SubtitleSection modifier="blog">{subtitle}</SubtitleSection>
      )}
    </Link>
  )
}

export default BlogPost
