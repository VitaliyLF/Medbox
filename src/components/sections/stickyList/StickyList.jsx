'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { urlFor } from '@/app/lib/clientSanity'
import SubtitleSection from '@/components/common/subtitleSection/SubtitleSection'
import TextSection from '@/components/common/textSection/TextSection'
import TitleSection from '@/components/common/titleSection/TitleSection'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import classNames from 'classnames/bind'

const StickyList = ({
  stickyListContent: { title, subtitle, listImages, alt, list, linkText } = {},
}) => {
  const listItemRefs = useRef({})

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    Object.values(listItemRefs.current).forEach((listItem, index) => {
      if (listItem) {
        ScrollTrigger.create({
          trigger: listItem,
          start: 'bottom center',
          end: '200px 15%',
          onEnter: () => listItem.classList.add('is-active'),
          onLeave: () => listItem.classList.remove('is-active'),
          onEnterBack: () => listItem.classList.add('is-active'),
          onLeaveBack: () => {
            if (index !== 0) {
              listItem.classList.remove('is-active')
            }
          },
        })
      }
    })
  }, [Object.keys(listItemRefs.current)])

  return (
    <section className="sticky-list">
      <div className="container">
        <div className="sticky-list__top">
          <TitleSection titleSection={title} />
          <SubtitleSection subtitleSection={subtitle} />
        </div>
        <div className="sticky-list__inner">
          <aside className="sticky-list__aside">
            <ul className="sticky-list__images">
              {listImages?.map((item) => {
                const imageDimensions = item.image?.asset
                  ? decodeAssetId(item.image.asset._ref).dimensions
                  : null

                return (
                  <li
                    className="sticky-list__images-item"
                    key={item.image.asset._ref}>
                    <Image
                      className="sticky-list__image"
                      src={urlFor(item.image).url()}
                      alt={alt || ''}
                      width={imageDimensions.width || 0}
                      height={imageDimensions.height || 0}
                      loading="lazy"
                    />
                  </li>
                )
              })}
            </ul>
          </aside>
          <div className="sticky-list__info">
            <ul className="sticky-list__items">
              {list?.map((item) => (
                <li
                  className={classNames('sticky-list__item', {
                    'is-active': item._key === list[0]._key,
                  })}
                  key={item._key}
                  ref={(el) => (listItemRefs.current[item._key] = el)}>
                  <h4 className="sticky-list__item-subtitle">{item.title}</h4>
                  <TextSection textSection={item.text} />
                </li>
              ))}
            </ul>
            {linkText && (
              <Link className="sticky-list__btn btn" href="/">
                {linkText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickyList
