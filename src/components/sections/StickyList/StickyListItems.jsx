'use client'

import TextSection from '@/components/common/TextSection/TextSection'
import { useGSAP } from '@gsap/react'
import classNames from 'classnames/bind'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const StickyListItems = ({ list }) => {
  const listItemRefs = useRef([])
  gsap.registerPlugin(ScrollTrigger)

  console.log(listItemRefs)

  useGSAP(
    () => {
      listItemRefs.current.forEach((ref) => {
        gsap.fromTo(
          ref,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: ref,
              markers: true,
              start: 'center center',
              toggleActions: 'play play none pause',
            },
          },
        )
      })
    },
    { scope: listItemRefs },
  )

  return (
    <ul className="sticky-list__items">
      {list?.length > 0 &&
        list?.map((item, index) => (
          <li
            className="sticky-list__item"
            key={item._key}
            ref={(ref) => {
              listItemRefs.current[index] = ref

              console.log(listItemRefs)
              console.log(ref)
            }}>
            <h4 className="sticky-list__item-subtitle">{item.title}</h4>
            <TextSection>{item.text}</TextSection>
          </li>
        ))}
    </ul>
  )
}

export default StickyListItems
