import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'

const FooterPartnersList = ({ partnersList }) => (
  <ul className="footer__bottom-list">
    {partnersList?.map((partner) => {
      const partnerDimensions = partner.image?.asset
        ? decodeAssetId(partner.image.asset._ref).dimensions
        : null

      return (
        <li className="footer__bottom-item" key={partner._key}>
          <Link
            className="footer__bottom-link"
            href={partner.url}
            target="_blank">
            <Image
              className="footer__bottom-image"
              src={urlFor(partner.image).url()}
              alt={partner.alt || ''}
              width={partnerDimensions?.width || 0}
              height={partnerDimensions?.height || 0}
              title={`${partner.alt} || New window`}
            />
          </Link>
        </li>
      )
    })}
  </ul>
)

export default FooterPartnersList
