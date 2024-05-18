'use client'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import ContentBlock from '../../common/сontentBlock/ContentBlock'
import Tilt from 'react-parallax-tilt'
import { useEffect, useState } from 'react'

const Hero = ({ heroContent }) => {
  const [isMobile, setIsMobile] = useState(false)
  const { title, subtitle, text, btnText, image, alt } = heroContent ?? {}
  const dimensions = image?.asset ? decodeAssetId(image.asset._ref).dimensions : null

  // gsap.registerPlugin(useGSAP)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 576px)')
    setIsMobile(mediaQuery.matches)

    const handleResize = () => setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleResize)

    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  // useGSAP(() => {
  //   gsap.fromTo('.title-section', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 })
  // }, [])

  return (
    <section className="hero">
      <h1 className="visually-hidden">
        MedBox: Revolutionizing Senior Pharmacy Services for Stress-Free Medication Management
      </h1>
      <div className="hero__container container">
        <div className="hero__wrapper">
          <ContentBlock
            contentClassName="hero__content"
            title={title}
            subtitle={subtitle}
            subtitleModifier="extra-large"
            btnText={btnText}
            btnModifier="hero-section"
            text={text}
            textModifier="details"
          />
          {image &&
            (isMobile ? (
              <Image
                className="hero__img"
                src={urlFor(image).url()}
                alt={alt || ''}
                width={dimensions.width || 0}
                height={dimensions.height || 0}
                loading="lazy"
              />
            ) : (
              <Tilt scale={1.1} transitionSpeed={1500} tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <Image
                  className="hero__img"
                  src={urlFor(image).url()}
                  alt={alt || ''}
                  width={dimensions.width || 0}
                  height={dimensions.height || 0}
                  loading="lazy"
                />
              </Tilt>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
