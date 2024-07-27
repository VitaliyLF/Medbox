import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'

const Logotype = ({ logoImage, logoClass, logoImageClass }) => {
  const logoDimensions = logoImage?.asset
    ? decodeAssetId(logoImage.asset._ref).dimensions
    : null

  return (
    <>
      {logoImage && (
        <Link className={logoClass} href="/">
          <Image
            className={logoImageClass}
            src={urlFor(logoImage).url()}
            alt="Medbox Logo"
            title="Homepage"
            width={logoDimensions.width || 0}
            height={logoDimensions.height || 0}
            priority={true}
          />
        </Link>
      )}
    </>
  )
}
export default Logotype
