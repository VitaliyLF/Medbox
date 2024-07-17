import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'

const FooterSocialList = ({ socialList }) => (
  <ul className="footer__social-list">
    {socialList?.map((socialItem) => {
      const socialDimensions = socialItem.socialIcon?.asset
        ? decodeAssetId(socialItem.socialIcon.asset._ref).dimensions
        : null

      return (
        <li className="footer__social-item" key={socialItem._key}>
          <Link
            className="footer__social-link"
            href={socialItem.url}
            target="_blank"
            title={`${socialItem.socialIconAlt} || New window`}>
            {socialItem.linkText}
            {socialItem.socialIcon && (
              <Image
                className="footer__social-image"
                src={urlFor(socialItem.socialIcon).url()}
                alt={socialItem.socialIconAlt || ''}
                width={socialDimensions?.width || 0}
                height={socialDimensions?.height || 0}
              />
            )}
          </Link>
        </li>
      )
    })}
  </ul>
)

export default FooterSocialList
