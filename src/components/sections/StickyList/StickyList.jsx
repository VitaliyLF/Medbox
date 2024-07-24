'use client'

import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'
import TitleSection from '@/components/common/TitleSection/TitleSection'
import Link from 'next/link'
import { useState } from 'react'
import StickyListImages from './StickyListImages'
import StickyListItems from './StickyListItems'

const StickyList = ({ stickyListContent }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { title, subtitle, listImages, alt, list, linkText } =
    stickyListContent ?? {}

  return (
    <section className="sticky-list">
      <div className="container">
        <div className="sticky-list__top">
          {title && <TitleSection>{title}</TitleSection>}
          {subtitle && <SubtitleSection>{subtitle}</SubtitleSection>}
        </div>
        <div className="sticky-list__inner">
          <aside className="sticky-list__aside">
            <StickyListImages
              listImages={listImages}
              alt={alt}
              activeIndex={activeIndex}
            />
          </aside>
          <div className="sticky-list__info">
            <StickyListItems list={list} setActiveIndex={setActiveIndex} />
            {Boolean(linkText) && (
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
