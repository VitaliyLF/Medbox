import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'

const BlogPost = ({ source }) => {
  const { url, image, alt, tag, subtitle } = source

  const { dimensions } = decodeAssetId(image.asset._ref)

  return (
    <Link className="blog-post" href={url}>
      <div className="blog-post__wrapper">
        <Image
          className="blog-post__image"
          src={urlFor(image).url()}
          alt={alt || ''}
          width={dimensions.width}
          height={dimensions.height}
          loading="lazy"
          title={subtitle}
        />
      </div>

      <div className="blog-post__meta text-section text-section--medium">
        {tag && <div className="blog-post__tag">{tag}</div>}
        <time className="blog-post__time" dateTime="">
          Sep 23, 2023
        </time>
      </div>
      {subtitle && <h2 className="blog-post__subtitle subtitle-section subtitle-section--blog">{subtitle}</h2>}
    </Link>
  )
}

export default BlogPost
